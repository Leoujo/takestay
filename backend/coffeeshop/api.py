from ninja import Router, ModelSchema
from .models import Coffeeshop, Category
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from typing import List

router = Router()


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = "__all__"


class CategoriesSchema(ModelSchema):
    class Config:
        model = Category
        model_fields = "__all__"


# @router.post("/", response=CoffeeshopSchema)
# def createSingleCoffeeshop(request, coffeeshop: CoffeeshopSchema):
#     c1 = coffeeshop.dict()
#     coffeeshop = Coffeeshop(**c1)
#     coffeeshop.save()
#     return coffeeshop


@router.post("/", response=CoffeeshopSchema)
def post_single_coffeeshop(request, data: CoffeeshopSchema):
    #  dict() transforma o json em um dicionário
    # O ** faz com que vc não precise escrever item por item "(name="leozin", categories:[])"
    d1 = data.dict()
    new_coffeeshop = Coffeeshop.objects.create(name=d1["name"], logo_url=d1["logo_url"])

    return new_coffeeshop


# Get all the coffeeshops
@router.get("/", response=List[CoffeeshopSchema])
def get_all_coffeeshops(request):
    coffeeshops = Coffeeshop.objects.all()
    return coffeeshops


# Get one coffeeshop by id
@router.get("/{id}", response=CoffeeshopSchema)
def get_single_coffeeshop(request, id):
    object = Coffeeshop.objects.get(pk=id)
    if object is None:
        object = []

    return object


# CATEGORY - create and delete (both one)
# @router.get("/categories/", response=List[CategoriesSchema])
# def getAllCategories(request):
#     categories = Category.objects.all()
#     return categories

# ITEM - create and delete (both one)
