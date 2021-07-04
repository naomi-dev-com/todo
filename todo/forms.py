from django import forms
from .models import TodoDB


class TodoForm(forms.ModelForm):
    class Meta:
        model = TodoDB
        fields = ["add"]
        labels = {"add": "新規追加"}
