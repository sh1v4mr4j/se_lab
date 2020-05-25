from lab.models import school
from lab.models import student
from rest_framework import viewsets, permissions
from .serializers import schoolSerializer
from .serializers import studentSerializer



class studentViewSet(viewsets.ModelViewSet):
    queryset = student.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = studentSerializer

class schoolViewSet(viewsets.ModelViewSet):
    queryset = school.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = schoolSerializer