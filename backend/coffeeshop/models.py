from django.db import models
from owner.models import Owner


class Item(models.Model):
    name = models.CharField(max_length=255)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)


class Category(models.Model):
    name = models.CharField(max_length=255)
    items = models.ManyToManyField(Item)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"


class Coffeeshop(models.Model):
    logo_url = models.URLField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200)
    owner = models.OneToOneField(Owner, on_delete=models.CASCADE, null=True)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.name
