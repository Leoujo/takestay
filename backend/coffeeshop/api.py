from ninja import NinjaAPI, Schema, ModelSchema
from .models import Coffeeshop
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict

api = NinjaAPI()


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = "__all__"

# COFFEESHOPS
# Post a coffeeshop


@api.post("/", response=CoffeeshopSchema)
def createSingleCoffeeshop(request, coffeeshop: CoffeeshopSchema):
    c1 = coffeeshop.dict()
    coffeeshop = Coffeeshop(**c1)
    coffeeshop.save()
    return coffeeshop


# Get all the coffeeshops
@api.get("/")
def getAllCoffeeshops(request):
    coffeeshops = Coffeeshop.objects.all()
    response = [{'id': i.id, 'name': i.name} for i in coffeeshops]
    return response


# Get one coffeeshop by id
@api.get("/{id}")
def getSingleCoffeeshop(request, id):
    coffeeshop = get_object_or_404(Coffeeshop, id=id)
    return model_to_dict(coffeeshop)


# CATEGORY - create and delete (both one)
# ITEM - create and delete (both one)