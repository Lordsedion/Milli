from django.urls import path
from knox import views as knox_views
from .views import *



urlpatterns = [
    path('', main),
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', Login.as_view(), name='login'),
    path('details/', getUserData, name='details'),
    path('check/', Check.as_view(), name='check'),
    path('with/', WithView.as_view(), name='withdraw'),
    path('subby/', Subby.as_view(), name='subby'),
    path('uppy/', Uppy.as_view(), name='uppy'),
    path('deposit/', DepositView.as_view(), name='deposit'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
]
