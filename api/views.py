from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Partido
from .serializers import PartidoSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ver_partidos(request):
    partidos = [
        {"equipo1": "Real Madrid", "equipo2": "Boca Juniors"},
        {"equipo1": "Inter de Milán", "equipo2": "Juventus"},
    ]
    return Response({
        "usuario": request.user.username,
        "partidos": partidos
    })

class PartidoViewSet(viewsets.ModelViewSet):
    
    queryset= Partido.objects.all()
    serializer_class = PartidoSerializer

    



