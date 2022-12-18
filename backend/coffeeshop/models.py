from django.db import models

# In Django, one to many is ForeignKey


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Coffeeshop(models.Model):
    logo_url = models.URLField(max_length=200)
    name = models.CharField(max_length=200)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.name
