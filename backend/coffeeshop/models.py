from django.db import models


class Item(models.Model):
    photo_url = models.URLField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=3, decimal_places=0, null=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=200)
    items = models.ManyToManyField(Item)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name


class Coffeeshop(models.Model):
    logo_url = models.URLField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.name
