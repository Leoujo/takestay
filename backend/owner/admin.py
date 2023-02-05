from django.contrib import admin
from .models import Owner

# Register your models here.


class Owners(admin.ModelAdmin):
    list_display = ("name", "email")


admin.site.register(Owner, Owners)
