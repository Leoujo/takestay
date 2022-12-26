
from ninja import NinjaAPI
from coffeeshop.api import router as coffeeshop_router
from owner.api import router as owner_router

api = NinjaAPI()
api.add_router("/coffeeshops/", coffeeshop_router)
api.add_router("/owners/", owner_router)
