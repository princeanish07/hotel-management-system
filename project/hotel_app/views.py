from django.shortcuts import get_object_or_404


from .models import Room, Booking, CheckIn
from .serializer import (
    RoomSerializer,
    BookingSerializer,
    CheckinSerializer
)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    ListCreateAPIView,
)
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser
)


class RoomView(ListAPIView):
    serializer_class = RoomSerializer
    queryset = Room.objects.order_by('-id')


class RoomListCreateView(ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class RoomDetailView(RetrieveAPIView):

    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    lookup_field = 'room_slug'
    def get(self, request, *args, **kwargs):
        room_objs = Room.objects.all()

        # Sorting
        sort_by_value = request.GET.get('sort_by')
        if sort_by_value:
            if sort_by_value == 'asc':
                room_objs = room_objs.order_by('price_per_night')
            elif sort_by_value == 'dsc':
                room_objs = room_objs.order_by('-price_per_night')

        # Filtering by amount
        amount = request.GET.get('amount')
        if amount:
            try:
                amount = float(amount)
                room_objs = room_objs.filter(price_per_night__lte=amount)
            except ValueError:
                return Response({'error': 'Invalid amount value'}, status=400)

        # Filtering by amenities
        amenities = request.GET.get('category')
        if amenities:
            try:
                amenities = [int(amenity) for amenity in amenities.split(',') if amenity.isdigit()]
                if amenities:
                    room_objs = room_objs.filter(amenities__in=amenities).distinct()
            except ValueError:
                return Response({'error': 'Invalid amenities value'}, status=400)

        serializer = RoomSerializer(room_objs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BookingCreateApiView(CreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()

    def create(self, request, *args, **kwargs):
        response = {}
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        response['data'] = serializer.data
        response['response'] = "Room is successfully booked"
        return Response(response, status=status.HTTP_201_CREATED, headers=headers)

    def post(self, request, *args, **kwargs):
        room = get_object_or_404(Room, pk=request.data['room'])
        if room.is_booked:
            return Response({"response": "Room is already booked"}, status=status.HTTP_200_OK)
        room.is_booked = True
        room.save()
        checked_in_room = CheckIn.objects.create(
            customer=request.user,
            room=room,
            phone_number=request.data['phone_number'],
            email=request.data['email']
        )
        checked_in_room.save()
        return self.create(request, *args, **kwargs)


class CheckoutView(APIView):
    def post(self, request):
        room = get_object_or_404(Room, pk=request.data['pk'])
        checked_in_room = CheckIn.objects.get(room__pk=request.data['pk'])
        room.is_booked = False
        room.save()
        checked_in_room.delete()
        return Response({"Checkout Successful"}, status=status.HTTP_200_OK)


class CheckedInView(ListAPIView):
    permission_classes = (IsAdminUser, )
    serializer_class = CheckinSerializer
    queryset = CheckIn.objects.order_by('-id')
