from django.db import models

# Create your models here.
class Amenities(models.Model):
    amenity=models.CharField(max_length=100)
    created_at=models.DateField(auto_now_add=True)
    updated_at=models.DateField(auto_now=True)
     
    def __str__(self) ->str:
        return self.amenity

class room(models.Model):
    room_name=models.CharField(max_length=100)
    room_price=models.IntegerField()
    room_description=models.TextField()
    amenities=models.ManyToManyField(Amenities)
    room_img=models.ImageField(upload_to='images/')
    created_at=models.DateField(auto_now_add=True)
    updated_at=models.DateField(auto_now=True)
    
    def __str__(self) ->str:
        return self.room_name
    def get_amenities(self):
        payload=[]
        for amenity in self.amenities.all():
            payload.append({'id':amenity.id,'amenity':amenity.amenity})
            return payload