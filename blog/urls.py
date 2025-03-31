from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import include, path


router = DefaultRouter()

router.register(r'posts', PostViewSet, basename='post')

urlpatterns = [
    path('', include(router.urls))
]
