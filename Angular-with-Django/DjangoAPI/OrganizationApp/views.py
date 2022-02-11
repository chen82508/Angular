from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from OrganizationApp.models import SyBranch
from OrganizationApp.serializers import BranchSerializer

# Create your views here.
@csrf_exempt
def branchApi(request, id = 0):
    if request.method == 'GET':
        Branches = SyBranch.objects.using('sqlserver').all()
        BranchesSerial = BranchSerializer(Branches, many = True)
        return JsonResponse(BranchesSerial.data, safe = False)
    
    elif request.method == 'POST':
        BranchData = JSONParser().parse(request)
        BranchSerial = BranchSerializer(data = BranchData)
        if BranchSerial.is_valid():
            BranchSerial.save()
            return JsonResponse("Insert Data Successfully!!", safe = False)
        return JsonResponse("Failed to Insert Data", safe = False)
    
    elif request.method == 'PUT':
        BranchData = JSONParser().parse(request)
        Branch = SyBranch.objects.using('sqlserver').get(sy_brh_sn = BranchData['sy_brh_sn'])
        BranchSerial = BranchSerializer(Branch, data = BranchData)
        if BranchSerial.is_valid():
            BranchSerial.save()
            return JsonResponse("Update Data Successfully!!", safe = False)
        return JsonResponse("Failed to Update Data", safe = False)
    
    elif request.method == 'DELETE':
        Branch = SyBranch.objects.using('sqlserver').get(sy_brh_sn = id)
        Branch.delete()
        return JsonResponse("Delete Data Successfully!!", safe = False)
