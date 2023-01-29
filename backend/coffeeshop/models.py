from django.db import models
from owner.models import Owner


class Coffeeshop(models.Model):
    logo_url = models.URLField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200)
    owner = models.OneToOneField(Owner, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
