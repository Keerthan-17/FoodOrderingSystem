from django.urls import path
from .views import *

urlpatterns = [
    path('admin-login/',admin_login_api),
    path('add-category/',add_category_api),
    path('manage-category/',manage_category_api),
    path('add-food-item/',add_food_item_api),
    path('manage-foods/',manage_foods_api),
]