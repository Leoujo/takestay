from django.db import models
from coffeeshop.models import Coffeeshop

# Create your models here.
class Owner(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=50)
    email = models.EmailField()
    coffeeshop_owned = models.OneToOneField(
        Coffeeshop, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} ({self.coffeeshop_owned})'
