from ninja import Router, ModelSchema
from .models import Owner
from typing import List
from django.shortcuts import get_object_or_404

router = Router()


class OwnerSchema(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["name", "email", "coffeeshop_owned"]


class OwnerSchemaCreation(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["name", "password", "email"]


class OwnerSchemaLogin(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["password", "email"]


@router.get("/", response=list[OwnerSchema])
def get_owners(request):
    owners = Owner.objects.all()
    return owners


@router.post("/", response=OwnerSchemaCreation)
def post_owner(request, data: OwnerSchemaCreation):
    d1 = data.dict()
    new_owner = Owner.objects.create(
        name=d1["name"], password=d1["password"], email=d1["email"])
    return new_owner


@router.post("/login", response=OwnerSchemaLogin)
def login_owner(request, data: OwnerSchemaLogin):
    d1 = data.dict()
    owner = get_object_or_404(Owner, email=d1["email"])
    return owner

