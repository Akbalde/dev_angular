from django.urls import path
from .views import StudentGenericAPIView

urlpatterns = [
    path('students/', StudentGenericAPIView.as_view(), name="students-list"),
    path('students/<int:pk>', StudentGenericAPIView.as_view(), name="students-detail"),
]