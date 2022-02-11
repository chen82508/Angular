from django.conf.urls import url
from SysFunctionApp import views

urlpatterns = [
    url(r'^SysFunctiontab/$', views.SysFunctiontabApi),
    url(r'^SysFunctiontab/([0-9]+)$', views.SysFunctiontabApi)
]