from django.contrib import admin
from .models import Online_Booking

@admin.register(Online_Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('Check_IN_Date', 'Check_out_Date', 'number_of_adults', 'number_of_children', 'Special_request')
    search_fields = ('Check_IN_Date ', 'Check_out_Date ', 'Special_request')
    list_filter = ('Check_IN_Date', 'Check_out_Date', 'number_of_adults', 'number_of_children',)

