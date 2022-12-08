from django.db import models

# Create your models here.
class Coffeshop(models.Model):
   name = models.CharField(max_length=20)
   logo_url = models.URLField(max_length=200, blank=True)
   

class Category(models.Model):
   name = models.CharField(max_length=20)

   
class Item(models.Model):
   name = models.CharField(max_length=20)
   description = models.CharField(max_length=200, blank=True)
   logo_url = models.URLField(max_length=200, blank=True)