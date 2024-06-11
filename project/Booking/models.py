from django.db import models

from django.db import models

class Booking(models.Model):
    arrival = models.DateField()
    departure = models.DateField()
    number_of_adults = models.IntegerField()
    number_of_children = models.IntegerField()
    promo_code = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return "Booking from {self.arrival} to {self.departure} for {self.number_of_adults} adults and {self.number_of_children} children"
