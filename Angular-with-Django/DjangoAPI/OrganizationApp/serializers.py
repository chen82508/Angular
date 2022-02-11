from rest_framework import serializers
from OrganizationApp.models import SyBranch

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyBranch
        fields = '__all__'
    
    def create(self, validated_data):
        return SyBranch.objects.using('sqlserver').create(**validated_data)