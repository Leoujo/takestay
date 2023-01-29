from django.contrib import admin
from .models import Coffeeshop


class Items(admin.ModelAdmin):
    list_display = ("name", "price")
    #  list_display_links = ('name', 'price') -> Both clickable
    # Allow to search the items by name and price.
    search_fields = ("name", "price")
    #  Create a automatic filter on the items, by name and price.
    list_filter = ("name", "price")
    #  Create pages with the maximum of 10 items each.
    list_per_page = 10


admin.site.register(Coffeeshop)
