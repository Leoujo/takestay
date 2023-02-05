from ninja import Router, ModelSchema, Schema
from .models import Coffeeshop, Category, Item
from django.http import Http404
from owner.models import Owner


router = Router()


class CategorySchema(ModelSchema):
    class Config:
        model = Category
        model_fields = ["name"]


class ItemSchema(ModelSchema):
    class Config:
        model = Item
        model_fields = ["name", "category"]


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = ["name", "owner", "categories"]


class CreateCoffeeshopSchema(Schema):
    name: str
    owner_id: str


class OkSchema(Schema):
    message: str


# Get one coffee shop by user id
@router.get("/{userId}", response=CoffeeshopSchema)
def get_single_coffeeshop(request, userId):
    try:
        print("--> Searching coffeeshop")
        coffeeshop = Coffeeshop.objects.get(owner__id=userId)
        return 200, coffeeshop
    except Coffeeshop.DoesNotExist:
        raise Http404("Coffeeshop does not exist")


# Create one coffee shop linked to an user id
@router.post("/", response={201: CoffeeshopSchema})
def create_coffeeshop(request, payload: CreateCoffeeshopSchema):
    print("--> Looking for owner by id")
    owner = Owner.objects.get(id=payload.owner_id)
    print("--> Creating coffee shop for that owner")
    new_coffeeshop = Coffeeshop.objects.create(name=payload.name, owner=owner)
    return 201, new_coffeeshop


# Create category by coffee shop id
# @router.post("/category/", response={201: CategorySchema})
# def create_category(request, payload: CategorySchema):
#     print("--> Creating new category")
#     new_category = Category.objects.create(name=payload.name)

#     return 201, new_category


# Get all possible categories
@router.get("/category/", response=list[CategorySchema])
def create_category(request):
    print("--> Looking for all available categories")
    categories = Category.objects.all()
    return categories


# Get all items within a category
@router.get("/items/{categoryId}", response=list[ItemSchema])
def create_category(request, categoryId):
    print("--> Looking for all items in a specific category")
    items = Item.objects.filter(category__id=categoryId)
    return items
