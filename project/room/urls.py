from .views import *
from django.urls import path
urlpatterns = [
    path('get-rooms/',get_room)
]
