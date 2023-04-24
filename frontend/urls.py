from django.urls import re_path
from .views import *
import re


urlpatterns = [
    re_path('', main),
    re_path('login/', main),
]