from django.db import models
from django.utils import timezone


class TodoDB(models.Model):
    add = models.CharField(max_length=100)
    created_date = models.DateTimeField(default=timezone.now)
