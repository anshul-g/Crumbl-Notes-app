from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Note
from .serialisers import NoteSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def notesList(request):
  user = request.user;
  notes = Note.objects.filter(user=user)
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)


@api_view(['POST'])
def noteCreate(request):
  serializer = NoteSerializer(data = request.data, context={'request': request})
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
  