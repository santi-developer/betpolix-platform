from django.urls import include, path
from .views import  PartidoViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router=DefaultRouter()
router.register(r'partidos',PartidoViewSet)


urlpatterns = [

    # Para login con JWT
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # Para refrescar el token cuando expire
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('',include(router.urls)),
]