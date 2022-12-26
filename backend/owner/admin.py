from django.contrib import admin
from .models import Owner

# Register your models here.


class Owners(admin.ModelAdmin):
    list_display = ('name', 'email', 'coffeeshop_owned')


admin.site.register(Owner, Owners)
