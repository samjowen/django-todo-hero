from django.contrib import admin
from django.urls import path
from .views import TodoListCreate, TodoRetrieveUpdateDestroy

urlpatterns = [
    path("admin/", admin.site.urls),
    path("todos/", TodoListCreate.as_view(), name="todo-list-create"),
    path(
        "todos/<int:pk>/",
        TodoRetrieveUpdateDestroy.as_view(),
        name="todo-retrieve-update-destroy",
    ),
]
