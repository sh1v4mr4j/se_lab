from rest_framework import serializers
from lab.models import student
from lab.models import school

class schoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = school
        fields = '__all__'
class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model = student
        fields = '__all__'