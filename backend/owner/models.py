from django.db import models
from coffeeshop.models import Coffeeshop
from django.contrib.auth.hashers import make_password

# Create your models here.


class Owner(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.EmailField()
    coffeeshop_owned = models.OneToOneField(
        Coffeeshop, on_delete=models.CASCADE)

   #  Encrypt password
    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Owner, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name} ({self.coffeeshop_owned})'
