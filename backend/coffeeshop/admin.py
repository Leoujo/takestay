from django.contrib import admin
from .models import Coffeeshop, Category, Item


class Coffeeshops(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
    )
    #  list_display_links = ('name', 'price') -> Both clickable
    # Allow to search the items by name and price.
    search_fields = ("name", "id")
    #  Create a automatic filter on the items, by name and price.
    list_filter = ("name", "id")
    #  Create pages with the maximum of 10 items each.
    list_per_page = 10


class Categories(admin.ModelAdmin):
    list_display = ("name", "id")


class Items(admin.ModelAdmin):
    list_display = ("name", "id")


admin.site.register(Coffeeshop, Coffeeshops)
admin.site.register(Category, Categories)
admin.site.register(Item, Items)
