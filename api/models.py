from django.db import models
from django.contrib.auth.models import AbstractUser


class Usuario(AbstractUser):
    saldo = models.DecimalField(
        max_digits=10,  # hasta 99999999.99
        decimal_places=2,
        default=0.00,
        verbose_name='Saldo disponible'
    )

    def __str__(self):
        return f"{self.username} - Saldo: ${self.saldo}"
    


class Partido(models.Model):

    equipo_local = models.CharField(max_length=100)
    equipo_visitante = models.CharField(max_length=100)
    fecha = models.DateTimeField()

    RESULTADOS = [
        ('L', 'Local gana'),
        ('V', 'Visitante gana'),
        ('E', 'Empate'),
        ('P', 'Pendiente'),
    ]
    resultado = models.CharField(max_length=1, choices=RESULTADOS, default='P')
    relevante = models.BooleanField(default=False, help_text="Indica si el partido se muestra en la página de inicio")

    def __str__(self):
        return f"{self.equipo_local} vs {self.equipo_visitante} - {self.fecha.strftime('%Y-%m-%d')}"
    
class Apuesta(models.Model):

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='apuestas')
    partido = models.ForeignKey(Partido, on_delete=models.CASCADE, related_name='apuestas')
    monto = models.DecimalField(max_digits=10, decimal_places=2,default=0.00,)
    
    OPCIONES = [
        ('L', 'Gana local'),
        ('V', 'Gana visitante'),
        ('E', 'Empate'),
    ]
    eleccion = models.CharField(max_length=1, choices=OPCIONES)

    ganada = models.BooleanField(null=True, blank=True)  # Null porque puede estar pendiente

    fecha_apuesta = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Apuesta {self.usuario} en {self.partido}: {self.get_eleccion_display()} por {self.monto}"



