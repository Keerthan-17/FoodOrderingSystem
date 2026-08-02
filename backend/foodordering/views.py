from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view,parser_classes
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.
@api_view(['POST'])
def admin_login_api(request):
  username = request.data.get('username')
  password = request.data.get('password')

  user = authenticate(username=username, password=password)

  if user is not None and user.is_staff:
    return Response({"message":"Login Successfull","username":username},status=200)
  return Response({"message":"Invalid Credentials"},status=401)

@api_view(['POST'])
def add_category_api(request):
  category_name = request.data.get('category_name')

  Category.objects.create(category_name = category_name)
  return Response({"message":"Category has been created Successfully."},status=201)

@api_view(['GET'])
def manage_category_api(request):
  categories = Category.objects.all()
  serializer = CategorySerializer(categories, many=True)
  return Response(serializer.data)

from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import FoodSerializer

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def add_food_item_api(request):
  serializer = FoodSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response({"message":"Food has been Added Successfully."},status=201)
  return Response({"message": "Something went wrong!!"},status=400)

@api_view(['GET'])
def manage_foods_api(request):
  foods = Food.objects.all()
  serializer = FoodSerializer(foods, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def food_search_api(request):
  query = request.GET.get('q','')
  foods = Food.objects.filter(item_name__icontains=query)
  serializer = FoodSerializer(foods, many=True)
  return Response(serializer.data)

import random
@api_view(['GET'])
def random_foods_api(request):
  foods = list(Food.objects.all())
  random.shuffle(foods)
  limited_foods = foods[0:9]
  serializer = FoodSerializer(limited_foods, many=True)
  return Response(serializer.data)