from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Partido
from .serializers import PartidoSerializer
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
# Create your views here.



class PartidosRelevantesView(ListAPIView):
    serializer_class = PartidoSerializer
    permission_classes = [AllowAny]
    authentication_classes = [] 
    

    def get_queryset(self):
        return Partido.objects.filter(relevante=True)


class PartidoViewSet(viewsets.ModelViewSet):
    
    queryset= Partido.objects.all()
    serializer_class = PartidoSerializer

    @action(detail=False, methods=['get'])
    def relevantes(self, request):
        partidos_relevantes = Partido.objects.filter(relevante=True)
        serializer = self.get_serializer(partidos_relevantes, many=True)
        return Response(serializer.data)

    



