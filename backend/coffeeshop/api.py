from ninja import Router, ModelSchema, Schema
from .models import Coffeeshop
from typing import List

router = Router()


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = "__all__"


# Get one coffeeshop by user id
@router.get("/{userId}", response={200: CoffeeshopSchema, 202: object})
def get_single_coffeeshop(request, id):
    try:
        coffeeshops = Coffeeshop.objects.get(pk=id)
    except Coffeeshop.DoesNotExist:
        return 202, {}
    return coffeeshops
