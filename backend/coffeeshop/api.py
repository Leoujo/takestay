from ninja import Router, ModelSchema, Schema
from .models import Coffeeshop
from typing import List
from django.http import Http404


router = Router()


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = "__all__"


# Get one coffeeshop by user id
@router.get("/{userId}", response=CoffeeshopSchema)
def get_single_coffeeshop(request, userId):
    try:
        print("--> Searching coffeeshop")
        coffeeshop = Coffeeshop.objects.get(owner__id=userId)
        return 200, coffeeshop
    except Coffeeshop.DoesNotExist:
        raise Http404("Coffeeshop does not exist")
