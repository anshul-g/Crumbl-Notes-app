from django.db import models

# Create your models here.
class Note(models.Model):
  user = models.CharField(max_length=200)
  title=models.CharField(max_length=200)
  content=models.CharField(max_length=100000)

  def __str__(self):
    return self.title