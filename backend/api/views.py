from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from .serializers import UserSerilizer

from allauth.socialaccount.models import SocialAccount, SocialToken

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

import json


User = get_user_model()



class UserCreateView(generics.CreateAPIView):

  queryset = User.objects.all()
  serializer_class = UserSerilizer
  permission_classes = [AllowAny]


class UserDetailView(generics.RetrieveUpdateAPIView):

  queryset = User.objects.all()
  serializer_class = UserSerilizer
  permission_classes = [IsAuthenticated]

  def get_object(self):
    return self.request.user



@login_required
def google_login_callback(request):

  user = request.user

  social_accounts = SocialAccount.objects.filter(user=user)
  print("Social Account for user:", social_accounts)

  social_account = social_accounts.first()

  if not social_account:
    print("no social account for user", user)
    return redirect('http://localhost:5173/login/callback/?error=NoSocialAccount')
  
  token = SocialToken.objects.filter(account=social_account, account__provider='google').first()

  if token:

    print("google token found.",token.token)
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    return redirect(f'http://localhost:5173/login/callback/?access_token={access_token}')
  
  else :

    print("no google token found for user", user)
    return redirect(f'http://localhost:5173/login/callback/?error=NoGoogleToken')
  


@csrf_exempt
def validate_google_token(request):

  if request.method == "POST":

    try :
      data = json.loads(request.body)
      google_access_token = data.get('access_token')
      print(google_access_token)

      if not google_access_token:
        return JsonResponse({'detail': 'Access Token is missing.'}, status=400)
      return JsonResponse({'valid': True})
    
    except json.JSONDecodeError:
      return JsonResponse({'detail': 'Invalid JSON.'}, status=400)
  return JsonResponse({'detail': 'Method not allowed.'}, status=405)





