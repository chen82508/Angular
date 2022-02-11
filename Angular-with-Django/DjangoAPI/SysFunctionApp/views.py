from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from SysFunctionApp.models import SyFunctiontab
from SysFunctionApp.serializers import FunctionTabSerializer

# Create your views here.
#region SysFunctionTab API
@csrf_exempt
def SysFunctiontabApi(request, id = 0):
    if request.method == 'GET':
        FunctionTabs = SyFunctiontab.objects.using('sqlserver').all();
        FunctionTabsSerial = FunctionTabSerializer(FunctionTabs, many = True)
        return JsonResponse(FunctionTabsSerial.data, safe = False)

    elif request.method == 'POST':
        FunctionTabData = JSONParser().parse(request)
        FunctionTabSerial = FunctionTabSerializer(data = FunctionTabData)
        if FunctionTabSerial.is_valid():
            FunctionTabSerial.save()
            return JsonResponse("Insert Data Successfully!!", safe = False)
        return JsonResponse("Failed to Insert Data", safe = False)

    elif request.method == 'PUT':
        FunctionTabData = JSONParser().parse(request)
        FunctionTab = SyFunctiontab.objects.using('sqlserver').get(sy_fct_sn = FunctionTabData['sy_fct_sn'])
        FunctionTabSerial = FunctionTabSerializer(FunctionTab, data = FunctionTabData)
        if FunctionTabSerial.is_valid():
            FunctionTabSerial.save()
            return JsonResponse("Update Data Successfully!!", safe = False)
        return JsonResponse("Failed to Update Data", safe = False)
    
    elif request.method == 'DELETE':
        FunctionTab = SyFunctiontab.objects.using('sqlserver').get(sy_fct_sn = id)
        FunctionTab.delete()
        return JsonResponse("Delete Data Successfully!!", safe = False)
#endregion
