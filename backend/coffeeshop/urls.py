
from django.urls import path
from .api import api


urlpatterns = [
    path("coffeeshop/", api.urls),
]
