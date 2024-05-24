from django.shortcuts import render
from .models import room 
from django.http import JsonResponse
# Create your views here.
def get_room(request):
    try:
        room_objs=room.objects.all()

        if request.GET.get('sort_by'):
            sort_by_value=request.GET.get('sort_by')
            if sort_by_value == 'asc':
                room_objs = room_objs.order_by('room_price')
            elif sort_by_value == 'dsc':
                room_objs = room_objs.order_by('-room_price')


        if request.GET.get('amount'):
            amount= request.GET.get('amount')
            room_objs=room_objs.filter(room_price__lte = amount)
        
        if request.GET.get('amenities'):
            amenities=request.GET.get('amenities')
            amenities=str(amenities).split(',')
            am=[]
            for amenity in amenities:
                am.append(int(amenity))
            room_objs=room_objs.filter(amenities__in=am)

        payload=[]
        for room_obj in room_objs:
            payload.append({
                'room_name': room_obj.room_name,
                'room_price': room_obj.room_price,
                'hotel_description': room_obj.room_description,
                'room_image':str(room_obj.room_img),
                'amenities':room_obj.get_amenities()

            })
        return JsonResponse(payload, safe=False)
    except Exception as e:
     print(e)
    return JsonResponse({'message':'something went wrong'})

