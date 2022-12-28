from django.urls import path
from . import views

urlpatterns = [
  path('', views.apiOverview),
  path('notes-list', views.notesList),
  path('note-detail/<str:pk>', views.noteDetail),
  path('note-create', views.noteCreate),
  path('note-delete', views.noteDelete),
  path('note-update/<str:pk>', views.noteUpdate)
]