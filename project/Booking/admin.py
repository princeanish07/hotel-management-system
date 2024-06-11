from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('arrival', 'departure', 'number_of_adults', 'number_of_children', 'promo_code')
    search_fields = ('arrival', 'departure', 'promo_code')
    list_filter = ('arrival', 'departure', 'number_of_adults', 'number_of_children')

