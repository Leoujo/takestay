from django.db import models


class Coffeeshop(models.Model):
    logo_url = models.URLField(max_length=200)
    name = models.CharField(max_length=200)
