from django.urls import include, path
from .views import  PartidoViewSet, PartidosRelevantesView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,  # Para verificar tokens
)

router=DefaultRouter()
router.register(r'partidos',PartidoViewSet)


urlpatterns = [

    # AUTENTICACION
    # Para login con JWT
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Para refrescar el token cuando expire
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Para verificacion
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # API endpoints
    path('',include(router.urls)),
     path('partidos/relevantes/', PartidosRelevantesView.as_view(), name='partidos-relevantes'),
]