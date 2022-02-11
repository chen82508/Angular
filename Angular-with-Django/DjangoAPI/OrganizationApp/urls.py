from django.conf.urls import url
from OrganizationApp import views

urlpatterns = [
    url(r'^branch/$', views.branchApi),
    url(r'^branch/([0-9]+)$', views.branchApi)
]