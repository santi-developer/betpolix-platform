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
