

from django.contrib import admin
from django.urls import path, include
from api.views import *

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),

    path('api/user/register/', UserCreateView.as_view()),
    path('api/auth/user/', UserDetailView.as_view()),
    path('callback/', google_login_callback, name='callback'),
    path('api/google/validate_token/', validate_google_token, name='validate_token'),

    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),

    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('allauth.urls')),

]
