from django.shortcuts import render
from .models import Room  # Ensure the model name is capitalized
from django.http import JsonResponse

def get_room(request):
    try:
        room_objs = Room.objects.all()  # Ensure the model name is capitalized

        # Sorting
        sort_by_value = request.GET.get('sort_by')
        if sort_by_value:
            if sort_by_value == 'asc':
                room_objs = room_objs.order_by('room_price')
            elif sort_by_value == 'dsc':
                room_objs = room_objs.order_by('-room_price')

        # Filtering by amount
        amount = request.GET.get('amount')
        if amount:
            try:
                amount = float(amount)
                room_objs = room_objs.filter(room_price__lte=amount)
            except ValueError:
                return JsonResponse({'error': 'Invalid amount value'}, status=400)

        # Filtering by amenities
        amenities = request.GET.get('amenities')
        if amenities:
            try:
                amenities = [int(amenity) for amenity in amenities.split(',') if amenity.isdigit()]
                if amenities:
                    room_objs = room_objs.filter(amenities__in=amenities).distinct()
            except ValueError:
                return JsonResponse({'error': 'Invalid amenities value'}, status=400)

        # Building the response payload
        payload = []
        for room_obj in room_objs:
            payload.append({
                'id':room_obj.id,
                'room_name': room_obj.room_name,
                'room_price': room_obj.room_price,
                'hotel_description': room_obj.room_description,
                'room_image': str(room_obj.room_img.url),  # Ensure the image URL is correctly formatted
                'amenities': room_obj.get_amenities()  # Ensure get_amenities() returns a serializable format
            })

        return JsonResponse(payload, safe=False)

    except Exception as e:
        print(e)
        return JsonResponse({'message': 'Something went wrong'}, status=500)
