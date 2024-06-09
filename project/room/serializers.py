from rest_framework import serializers






class Amenities(serializers.Serializer):
    id= serializers.IntegerField()
    amenity=serializers.CharField(max_length=100)
    created_at=serializers.DateField(auto_now_add=True)
    updated_at=serializers.DateField(auto_now=True)

class room(serializers.Serializer):
    id= serializers.IntegerField()
    room_name=serializers.CharField(max_length=100)
    room_price=serializers.IntegerField()
    hotel_description=serializers.TextField()
    amenities=serializers.ManyToManyField(Amenities)
    room_img=serializers.ImageField(upload_to='media')
    created_at=serializers.DateField(auto_now_add=True)
    updated_at=serializers.DateField(auto_now=True)