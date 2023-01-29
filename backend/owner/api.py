from ninja import Router, ModelSchema
from .models import Owner
from typing import List
from django.shortcuts import get_object_or_404

router = Router()


class OwnerSchema(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["id", "name", "email"]


class OwnerSchemaCreation(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["name", "email"]


class OwnerSchemaLogin(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["id", "name", "email"]


@router.get("/", response=list[OwnerSchema])
def get_owners(request):
    owners = Owner.objects.all()
    return owners


@router.post("/", response=OwnerSchema)
def post_owner(request, data: OwnerSchemaCreation):
    d1 = data.dict()
    new_owner = Owner.objects.create(name=d1["name"], email=d1["email"])
    return new_owner


# If i can't find the user, I'll create a new one.
@router.post("/login", response={201: OwnerSchemaLogin, 200: OwnerSchemaLogin})
def login_owner(request, data: OwnerSchemaLogin):

    try:
        print("--> Searching user")
        owner = Owner.objects.get(id=data.id)
        return 200, owner
    except Owner.DoesNotExist:
        print("--> Creating user")
        new_owner = Owner.objects.create(id=data.id, name=data.name, email=data.email)
        return 201, new_owner

    # d1 = data.dict()
    # owner = get_object_or_404(Owner, email=d1["email"])
    # return owner
