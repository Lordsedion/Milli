from ast import Is
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken
import base64
from PIL import Image
from io import BytesIO
from django.contrib.auth import login, authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from knox.views import LoginView as KnoxLoginView
from stack_data import Serializer
from .models import *
import requests
import time
import json
from .serializers import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        login(request, user)
        post_data = {
            "username": request.user.username,
            "password": request.data["password"]
        }
        response = requests.post("http://127.0.0.1:8000/token/", data=post_data)
        # print(response.json())
        Account.objects.create(user=user, plans=Plan.objects.get(id=1)) 

        return Response( {
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            "access": str(TokenObtainPairSerializer(user).get_token(user).access_token), 
            "refresh": str(TokenObtainPairSerializer(user).get_token(user)),
        })


class Login(TokenObtainPairView):
    # permission_classes = (IsAuthenticated,)
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = request.data["email"]
        password = request.data["password"]
        user = authenticate(username=username, password=password)
        print("Hello ", username, password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return JsonResponse({"access": str(TokenObtainPairSerializer(user).get_token(user).access_token), "refresh": str(TokenObtainPairSerializer(user).get_token(user))})
                # return JsonResponse({"status": 200, "tokens": tokens})
            return HttpResponse("Error")
        return HttpResponse(f"User does not exist {username} {password}")


def getUserData(request):
    
    access_token = request.headers['access']
    refresh_token = request.headers['refresh']

    payload = {
        "token": access_token
    }

    r = requests.post("http://localhost:8000/verify/", json=payload)
    print(f"Status code: {r.content}")
    if r.status_code == 200:
        valuep = JWTAuthentication().authenticate(request)
        # print(f"Value : {request.user}")
        return JsonResponse({
            "access": 0,
            "account": Account.objects.filter(user=request.user).values()[0],
            "plans": Plan.objects.filter(id=Account.objects.filter(user=request.user).values()[0]["plans_id"]).values()[0], 
            "user":[request.user.first_name, request.user.last_name, request.user.username],
            "profit_record": [i for i in Profit.objects.filter(user=request.user).values()[::-1]],
            "currencies": [i for i in DepCurr.objects.all().values()[:]],
            "transaction": [i for i in Transaction.objects.filter(user=request.user).values()[::-1]],
            "total_plans": [i for i in Plan.objects.all().values()[:]]
            }, safe=False)
    else:
        new_payload = {
        "refresh": refresh_token
        }
        r = requests.post("http://localhost:8000/refresh/", json=new_payload)
        if r.status_code == 200:
            valuep = JWTAuthentication().authenticate(request)
            return JsonResponse({
            "access": 1,
            "access_token": json.loads(r.content)["access"],
            "account": Account.objects.filter(user=request.user).values()[0],
            "plans": Plan.objects.filter(id=Account.objects.filter(user=request.user).values()[0]["plans_id"]).values()[0], 
            "user":[request.user.first_name, request.user.last_name, request.user.username],
            "profit_record": [i for i in Profit.objects.filter(user=request.user).values()[::-1]],
            "transaction": [i for i in Transaction.objects.filter(user=request.user).values()[::-1]],
            "currencies": [i for i in DepCurr.objects.all().values()[:]],
            "total_plans": [i for i in Plan.objects.all().values()[:]]
            }, safe=False)
        else:
            return JsonResponse({"error": 400}, status=status.HTTP_401_UNAUTHORIZED)

    return HttpResponse(("Ok"))


class WithView(generics.ListAPIView):
    queryset = Withdraw.objects.all()
    serializer_class = WithdrawSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user1 = serializer.save()
        # Withdraw.objects.create(user=user1)
        u_id = User.objects.filter(username=user).values()[0]['id']
        print(f"Request: {u_id}")
        if float(request.data['amount']) > float(Account.objects.filter(user=u_id).values()[0]['balance']):
            return HttpResponse("Insufficient Balance")
        
        else:
            bal = Account.objects.get(user=u_id)
            bal.balance = bal.balance - float(request.data['amount'])
            bal.save()
        return HttpResponse("Your withdrawal request has been placed.")

class DepositView(generics.CreateAPIView):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        u_id = User.objects.filter(username=user).values()[0]['id']
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.is_valid(raise_exception=True)
            user1 = serializer.save()
        else:
            print(serializer.errors)
        return HttpResponse("Your deposit withdrawal request has been placed.")


class Subby(generics.ListAPIView):
    queryset = PlanSubby.objects.all()
    serializer_class = SubbySerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        u_id = User.objects.filter(username=user).values()[0]['id']
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user1 = serializer.save()
        bal = Account.objects.get(user=int(u_id))
        print(f"Integer: {u_id}")
        if bal.plans != None:
            if bal.plans.id == int(request.data['p_id']):
                return JsonResponse({1:"You are already subscribed"})
            else:
                if float(Account.objects.get(user=u_id).balance) > float(Plan.objects.get(id=int(request.data['p_id'])).cost):
                    bal.plans = Plan.objects.get(id=request.data['p_id'])
                    bal.balance -= 45
                    bal.save()
                    return HttpResponse("Your have successfully subscribed.")
                else:
                    return HttpResponse("Your plan subscription failed")
        else:
            return HttpResponse("No Plan yet")

class Uppy(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = PlanSubby.objects.all()
    serializer_class = PlanUpdateSerializer
    

    def post(self, request):
        user = request.user
        if User.objects.get(username=user).is_superuser:
            if int(request.data['a_id']) == 1:
                for i in Account.objects.all():
                    i.balance = i.balance + i.balance * float(Plan.objects.get(id=i.plans_id).rate/100)
                    i.save()
                return HttpResponse("Successfully Updated all user balances.")
            else:
                return HttpResponse(f"Nothing o {request.data['a_id']}")
        else:
            return HttpResponse("Werey wetin you dey find for here? You be superuser? Ewu")


class Check(generics.ListAPIView):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)

    def post(request):
        return HttpResponse(("Hi"))

# Create your views here.
def main(request):
    permission_classes = (IsAuthenticated,)
    if request.method == "GET":
        return HttpResponse(f"Hello: {request.headers['Authorization']}")
        # return JsonResponse({
        #     "Username": request.user.username,
        #     "First Name": request.user.first_name,
        #     "Last Name": request.user.last_name,
        #     "Email": request.user.email,
        #     "Password": request.user.password,
        #     "Account balance": request.user.account.balance,
        #     "Account plan id": request.user.account.plans.id,
        #     "Account plan name": request.user.account.plans.title,
        #     "Account No": request.user.account.acc_no,
        #     })
    else:
        return HttpResponse(("Lol"))

    