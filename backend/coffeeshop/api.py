from ninja import Router, ModelSchema, Schema
from .models import Coffeeshop, Category, Item
from owner.models import Owner
from django.shortcuts import get_object_or_404


router = Router()

# ITEMS -----------------------------------------------------------------------------
class ItemSchema(ModelSchema):
    class Config:
        model = Item
        model_fields = "__all__"


# Create item by category id
@router.post("/item/{categoryId}/", response={201: ItemSchema})
def create_item(request, categoryId, payload: ItemSchema):
    print("--> Create new item")
    new_item = Item.objects.create(
        name=payload.name,
        description=payload.description,
        price=payload.price,
    )
    print("--> Getting the category")
    category = Category.objects.get(id=categoryId)
    print("--> Adding item to category")
    category.items.add(new_item)
    return 201, category


# Get all items within a category
@router.get("/items/{categoryId}", response=list[ItemSchema])
def create_category(request, categoryId):
    print("--> Looking for all items in a specific category")
    items = Item.objects.filter(category__id=categoryId)
    return items


# COFFEE SHOPS -----------------------------------------------------------------------


class CreateCategorySchema(ModelSchema):
    class Config:
        model = Category
        model_fields = ["name"]


class NestedCategorySchema(Schema):
    name: str
    id: int
    items: list[ItemSchema]


# Here I'm showing the complete category object, and not just the id.
class NestedCoffeeshopSchema(Schema):
    name: str
    owner_id: str
    categories: list[NestedCategorySchema]


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = ["name", "owner", "categories"]


class CreateCoffeeshopSchema(Schema):
    name: str
    owner_id: str


#  COFFEE SHOP ---------------------------------------------------------------------------

# Get one coffee shop by owner id
@router.get("/{userId}", response=list[NestedCoffeeshopSchema])
def get_single_coffeeshop(request, userId):
    print("--> Searching coffeeshop")
    coffeeshop = Coffeeshop.objects.filter(owner__id=userId)
    return 200, coffeeshop


# Get all coffee shops
@router.get("/", response=list[NestedCoffeeshopSchema])
def get_all_coffeeshops(request):
    print("--> Searching all coffee shops")
    coffee_shops = Coffeeshop.objects.all()
    return coffee_shops


# Create one coffee shop linked to an user id
@router.post("/", response={201: CoffeeshopSchema})
def create_coffeeshop(request, payload: CreateCoffeeshopSchema):
    print("--> Looking for owner by id")
    owner = Owner.objects.get(id=payload.owner_id)
    print("--> Creating coffee shop for that owner")
    new_coffeeshop = Coffeeshop.objects.create(name=payload.name, owner=owner)
    return 201, new_coffeeshop


# CATEGORY ---------------------------------------------------------------------------

# Delete category by id
@router.delete("/category/{categoryId}")
def delete_category(request, categoryId):
    print("--> Getting category")
    category = get_object_or_404(Category, id=categoryId)
    print("--> Deleting it")
    category.delete()
    return {"success": True}


# Create category by owner id
@router.post("/category/{ownerId}/", response={201: CoffeeshopSchema})
def create_category(request, ownerId, payload: CreateCategorySchema):
    print("--> Creating new category")
    new_category = Category.objects.create(name=payload.name)
    print("--> Getting the coffeeshop")
    coffeeshop = Coffeeshop.objects.get(owner__id=ownerId)
    print("--> Adding the category to the coffeeshop")
    coffeeshop.categories.add(new_category)

    return 201, coffeeshop
