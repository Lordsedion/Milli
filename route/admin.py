from cProfile import Profile
from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Account)
admin.site.register(Withdraw)
admin.site.register(Deposit)
admin.site.register(Plan)
admin.site.register(DepCurr)
admin.site.register(Profit)
admin.site.register(Transaction)
