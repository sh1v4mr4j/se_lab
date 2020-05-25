from django.db import models

# Create your models here.

class student(models.Model):
    name = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    attendance = models.CharField(max_length=100)

class school(models.Model):
    name = models.CharField(max_length=200)
    block = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    