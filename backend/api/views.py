from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serialisers import NoteSerializer

# Create your views here.
@api_view(['GET'])
def apiOverview(request) :
  return Response({'data': 'Helloworld'})

@api_view(['GET'])
def notesList(request):
  notes = Note.objects.all()
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def noteCreate(request):
  serializer = NoteSerializer(request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data)