from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
  user = serializers.HiddenField(default=serializers.CurrentUserDefault())
  
  class Meta:
    model = Note
    fields = '__all__'