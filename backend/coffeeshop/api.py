from ninja import NinjaAPI, Schema, ModelSchema
from .models import Coffeeshop
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict

api = NinjaAPI()


@api.get("/")
def getAllCoffeeshops(request):
    coffeeshops = Coffeeshop.objects.all()
    response = [{'id': i.id, 'name': i.name} for i in coffeeshops]
    return response


@api.get("/{id}")
def getSingleCoffeeshop(request, id):
    coffeeshop = get_object_or_404(Coffeeshop, id=id)
    return model_to_dict(coffeeshop)


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = "__all__"


@api.post("/", response=CoffeeshopSchema)
def createSingleCoffeeshop(request, coffeeshop: CoffeeshopSchema):
    c1 = coffeeshop.dict()
    coffeeshop = Coffeeshop(**c1)
    coffeeshop.save()
    return coffeeshop
