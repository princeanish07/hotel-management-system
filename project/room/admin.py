from django.contrib import admin
from .models import room,Amenities
# Register your models here.
class room_admin(admin.ModelAdmin):
    list_display=['room_name','room_price','room_description','room_img']

admin.site.register(Amenities)
admin.site.register(room,room_admin)