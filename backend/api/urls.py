from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
  path('token/', jwt_views.TokenObtainPairView.as_view()),
  path('token/refresh/', jwt_views.TokenRefreshView.as_view()),
  path('notes-list', views.notesList),
  path('note-detail/<str:pk>', views.noteDetail),
  path('note-create', views.noteCreate),
  path('note-delete/<str:pk>', views.noteDelete),
  path('note-update/<str:pk>', views.noteUpdate)
]