from rest_framework import serializers
from SysFunctionApp.models import SyFunctiontab

class FunctionTabSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyFunctiontab
        fields = '__all__'
    
    def create(self, validated_data):
        return SyFunctiontab.objects.using('sqlserver').create(**validated_data)
