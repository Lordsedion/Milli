from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
import string
import random

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

def generate_username():
    length = 8

    while True:
        acc_no = ''.join(random.choices(string.ascii_letters, k=length))
        acc_no = '51'+acc_no
        if User.objects.filter(username=acc_no).count() == 0:
            break   
    return acc_no

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'], validated_data['email'], validated_data['password'])

        return user

class WithdrawSerializer(serializers.ModelSerializer):
    class Meta:
        model = Withdraw
        fields = ('amount', 'curr', 'wallet_addr')

class DepositSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Deposit
        fields = ('user','amount', 'curr', 's_proof')

class SubbySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanSubby
        fields = ('p_id',)

class PlanUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanUpSubby
        fields = ('a_id',)
