from distutils.command.upload import upload
from enum import unique
from django.db import models
import random, string
from django.contrib.auth.models import User
from traitlets import default
import datetime
# Create your models here.

def generate_account_number():
    length = 6

    while True:
        acc_no = ''.join(random.choices(string.digits, k=length))
        acc_no = '51'+acc_no
        # if Account.objects.filter(acc_no=acc_no).count() == 0:
        break   
    return acc_no

def withdraw():
    length = 12

    while True:
        acc_no = ''.join(random.choices(string.digits, k=length))
        acc_no = acc_no
        if Withdraw.objects.filter(w_id=acc_no).count() == 0:
            break   
    return acc_no

def deposit():
    length = 12

    while True:
        acc_no = ''.join(random.choices(string.digits, k=length))
        acc_no = acc_no
        try:
            if Deposit.objects.filter(w_id=acc_no).count() == 0:
                break   
        except:
            pass
    return acc_no

class Plan(models.Model):
    title = models.CharField(max_length=50)
    sub_title = models.CharField(max_length=250)
    minimum = models.FloatField(default=0.0)
    maximum = models.FloatField(default=0.0)
    minRate = models.FloatField(default=0, blank=True)
    maxRate = models.FloatField(default=0, blank=True)
    cost = models.IntegerField(default=0)
    duration = models.IntegerField(default=7)    

    def __str__(self):
        return self.title
    
class PlanSubby(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    p_id = models.IntegerField(default=0)

class PlanUpSubby(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    a_id = models.IntegerField(default=0)
    
class DepCurr(models.Model):
    title = models.CharField(max_length=50)
    wallet_address = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Account(models.Model):
    user = models.OneToOneField(User,null=False, on_delete=models.CASCADE)
    acc_no = models.CharField(max_length=8, null=True,  default=generate_account_number, unique=True)
    balance = models.IntegerField(default=0.0, null=True)
    profit = models.IntegerField(default=0.0, null=True)
    plans = models.ForeignKey(Plan, unique=False ,null=True, on_delete=models.CASCADE) 
    deposit = models.FloatField(blank=True, default=0.0)
    withdrawal = models.FloatField(blank=True, default=0.0)
    bonus = models.FloatField(blank=True, default=0.0)

    def save(self, *args, **kwargs):
        super(Account, self).save(*args, **kwargs)
        
    def __str__(self):
        return str(self.user)    

class Withdraw(models.Model):
    user = models.ManyToManyField(User)
    name = models.CharField(max_length=45)
    amount = models.FloatField(blank=True, default = 0)
    curr = models.CharField(max_length=3)
    wallet_addr = models.CharField(max_length=64)
    w_id = models.CharField(max_length=12, default=withdraw)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Profit(models.Model):
    user = models.CharField(max_length=45)
    amount = models.FloatField(default=0)
    plan = models.ForeignKey(Plan, unique=False ,null=True, on_delete=models.CASCADE)
    mode = models.CharField(max_length=45)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user

class Transaction(models.Model):
    user = models.CharField(max_length=45)
    Tran = models.CharField(max_length=45)
    amount = models.FloatField(default=0)
    transaction_id = models.CharField(max_length=45)
    date = models.DateField(auto_now_add=True)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user

class Deposit(models.Model):
    user = models.CharField(max_length=45) 
    amount = models.FloatField(blank=True, default = 0)
    curr = models.CharField(max_length=20)
    w_id = models.CharField(max_length=12, default=withdraw)
    s_proof = models.ImageField(upload_to="media/images")
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user

    



