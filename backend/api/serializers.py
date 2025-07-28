from rest_framework import serializers
from.models import Partido, Usuario


class PartidoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Partido
        fields= '__all__'

class SaldoSerializer(serializers.ModelSerializer):

    class Meta:
        model=Usuario
        fields=['saldo']