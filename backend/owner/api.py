from ninja import Router, ModelSchema
from .models import Owner
from django.shortcuts import get_object_or_404

router = Router()


class OwnerSchemaLogin(ModelSchema):
    class Config:
        model = Owner
        model_fields = ["id", "name", "email"]


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
