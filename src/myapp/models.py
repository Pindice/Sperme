from django.db import models

# Create your models here.

class Patient(models.Model):
    SEASON_CHOICES = [
        ('spring', 'Spring'),
        ('summer', 'Summer'),
        ('autumn', 'Autumn'),
        ('winter', 'Winter'),
    ]

    YES_NO_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    HIGH_FEVERS_CHOICES = [
        ('more_than_3_months_ago', 'More than 3 months ago'),
        ('less_than_3_months_ago', 'Less than 3 months ago'),
        ('no', 'No'),
    ]

    ALCOHOL_FREQUENCY_CHOICES = [
        ('once_a_week', 'Once a week'),
        ('hardly_ever_or_never', 'Hardly ever or never'),
        ('several_times_a_week', 'Several times a week'),
        ('several_times_a_day', 'Several times a day'),
        ('every_day', 'Every day'),
    ]

    SMOKING_HABIT_CHOICES = [
        ('occasional', 'Occasional'),
        ('daily', 'Daily'),
        ('never', 'Never'),
    ]

    season = models.CharField(max_length=10, choices=SEASON_CHOICES)
    age = models.IntegerField()
    childish_diseases = models.CharField(max_length=3, choices=YES_NO_CHOICES)
    accident_or_serious_trauma = models.CharField(max_length=3, choices=YES_NO_CHOICES)
    surgical_intervention = models.CharField(max_length=3, choices=YES_NO_CHOICES)
    high_fevers_last_year = models.CharField(max_length=30, choices=HIGH_FEVERS_CHOICES)
    alcohol_consumption = models.CharField(max_length=30, choices=ALCOHOL_FREQUENCY_CHOICES)
    smoking_habit = models.CharField(max_length=10, choices=SMOKING_HABIT_CHOICES)
    hours_sitting_per_day = models.IntegerField()
    diagnosis = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.id}: {self.diagnosis}"
