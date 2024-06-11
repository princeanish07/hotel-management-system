from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OnlineBookingViewSet

router = DefaultRouter()
router.register('onlinebooking', OnlineBookingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
