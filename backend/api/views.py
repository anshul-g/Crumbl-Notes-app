from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Note
from .serialisers import NoteSerializer

# Create your views here.
@api_view(['GET'])
def notesList(request):
  user = request.user;
  print(user)
  notes = Note.objects.all()
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def noteCreate(request):
  serializer = NoteSerializer(data = request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data)
  else:
    return Response('Data not in valid format')

@api_view(['POST'])
def noteUpdate(request, pk):
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(instance=note, data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data)
  else:
    return Response('Not updated!')

@api_view(['DELETE'])
def noteDelete(request,pk):
  note = Note.objects.get(id=pk)
  note.delete()
  return Response("Item deleted!")
  