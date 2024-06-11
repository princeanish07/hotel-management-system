from rest_framework import viewsets
from .models import Online_Booking
from .serializers import OnlineBookingSerializer

class OnlineBookingViewSet(viewsets.ModelViewSet):
    queryset = Online_Booking.objects.all()
    serializer_class = OnlineBookingSerializer
