from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.


class Owner(models.Model):
    id = models.CharField(primary_key=True, max_length=255)
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return f"{self.name} "
