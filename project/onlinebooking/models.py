from django.db import models

class Online_Booking(models.Model):
    Check_IN_Date = models.DateField()
    Check_out_Date = models.DateField()
    number_of_adults = models.IntegerField()
    number_of_children = models.IntegerField()
    Special_request=models.CharField(max_length=150, blank=True, null=True)
    Check_IN_Time = models.TimeField()


    def __str__(self):
        return "Booking from {self.Check_IN_Date} to {self.Check_out_Date} for {self.number_of_adults} adults and {self.number_of_children} children {self.Check_IN_Time} will be a arrival time "
