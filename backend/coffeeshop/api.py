from ninja import Router, ModelSchema, Schema
from .models import Coffeeshop
from django.http import Http404
from owner.models import Owner


router = Router()


class CoffeeshopSchema(ModelSchema):
    class Config:
        model = Coffeeshop
        model_fields = ["name", "owner"]


class CreateCoffeeshopSchema(Schema):
    name: str
    owner_id: str


# Get one coffeeshop by user id
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


# Create coffee shop category

# Create coffee shop item
