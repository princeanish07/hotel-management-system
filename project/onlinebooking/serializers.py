from rest_framework import serializers
from .models import Online_Booking

class OnlineBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Online_Booking
        fields = '__all__'
