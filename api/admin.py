from django.contrib import admin
from .models import Usuario, Partido, Apuesta
# Register your models here.
admin.site.register(Usuario)
admin.site.register(Partido)
admin.site.register(Apuesta)