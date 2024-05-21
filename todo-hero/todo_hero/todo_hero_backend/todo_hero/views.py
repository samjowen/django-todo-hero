from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer


# ListCreateAPIView already handles validation and error responses by default.
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
