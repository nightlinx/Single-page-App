from itertools import chain

from django.core.management.base import BaseCommand
from cthulhu import models


class Command(BaseCommand):
    help = 'Populates appearance and models.Jobs choices in database'

    def handle(self, *args, **options):
        models.Job.objects.bulk_create([
            models.Job(name="Antykwariusz", skills="a"),
            models.Job(name="Bogaty hobbysta", skills="a"),
            models.Job(name="Detektyw policyjny", skills="a"),
            models.Job(name="Dziennikarz", skills="a"),
            models.Job(name="Lakarz", skills="a"),
            models.Job(name="Pisarz", skills="a"),
            models.Job(name="Profesor", skills="a"),
            models.Job(name="Prywatny detektyw", skills="a"),
        ])

        models.Skill.objects.bulk_create([
            models.Skill(name="Antropologia", value=1),
            models.Skill(name="Archeologia", value=1),
            models.Skill(name="Broń Palna (Długa)", value=20),
            models.Skill(name="Bron Palna (Krótka)", value=20),
            models.Skill(name="Charakteryzacja", value=5),
            models.Skill(name="Elektryka", value=10),
            models.Skill(name="Gadanina", value=15),
            models.Skill(name="Historia", value=5),
            models.Skill(name="Jeździectwo", value=5),
            models.Skill(name="Język Obcy", value=1),
            models.Skill(name="Korzystanie z Bibliotek", value=20),
            models.Skill(name="Mechanika", value=1),
            models.Skill(name="Medycyna", value=1),
            models.Skill(name="Nasłuchiwanie", value=20),
            models.Skill(name="Nauka", value=1),
            models.Skill(name="Nawigacja", value=10),
            models.Skill(name="Obsługa Ciezkiego Sprzętu", value=1),
            models.Skill(name="Okultyzm", value=5),
            models.Skill(name="Perswazja", value=10),
            models.Skill(name="Pierwsza Pomoc", value=30),
            models.Skill(name="Pilotowanie", value=1),
            models.Skill(name="Pływanie", value=20),
            models.Skill(name="Prawo", value=5),
            models.Skill(name="Prowadzenie", value=20),
            models.Skill(name="Psychoanaliza", value=1),
            models.Skill(name="Psychologia", value=10),
            models.Skill(name="Rzucanie", value=20),
            models.Skill(name="Spostrzegawczosc", value=25),
            models.Skill(name="Sztuka/Rzemiosło", value=5),
            models.Skill(name="Sztuka Przetrwania", value=10),
            models.Skill(name="Slusarstwo", value=1),
            models.Skill(name="Tropienie", value=10),
            models.Skill(name="Urok Osobisty", value=15),
            models.Skill(name="Ukrywanie", value=20),
            models.Skill(name="Walka Wręcz (Bijatyka)", value=25),
            models.Skill(name="Wspinaczka", value=20),
            models.Skill(name="Wycena", value=5),
            models.Skill(name="Zastraszanie ", value=15),
            models.Skill(name="Zreczne Palce ", value=10),
        ])

        models.FaceShape.objects.bulk_create([
            models.FaceShape(Mx=100, My=100, rx=50, ry=70, x=100),
            models.FaceShape(Mx=100, My=100, rx=50, ry=75, x=100),
            models.FaceShape(Mx=95, My=105, rx=52, ry=60, x=110),
        ])

        models.LeftEyeLidShape.objects.bulk_create([
            models.LeftEyeLidShape(Mx=90, My=105, Cx1=90, Cy1=100,
                                   Cx2=105, Cy2=95, Cx=115, Cy=105),
            models.LeftEyeLidShape(Mx=85, My=100, Cx1=90, Cy1=100,
                                   Cx2=105, Cy2=95, Cx=115, Cy=105),
            models.LeftEyeLidShape(Mx=95, My=100, Cx1=90, Cy1=105,
                                   Cx2=105, Cy2=95, Cx=115, Cy=105),
        ])

        models.RightEyeLidShape.objects.bulk_create([
            models.RightEyeLidShape(Mx=133, My=105, Cx1=143, Cy1=95,
                                    Cx2=158, Cy2=100, Cx=158, Cy=105),
            models.RightEyeLidShape(Mx=133, My=105, Cx1=143, Cy1=95,
                                    Cx2=158, Cy2=100, Cx=163, Cy=100),
            models.RightEyeLidShape(Mx=133, My=105, Cx1=143, Cy1=95,
                                    Cx2=158, Cy2=105, Cx=153, Cy=100),
        ])

        models.UpperLipShape.objects.bulk_create([
            models.UpperLipShape(Mx=110, My=145, Cx1=115, Cy1=140,
                                 Cx2=125, Cy2=140, Cx=125, Cy=142, h=30),
            models.UpperLipShape(Mx=110, My=145, Cx1=115, Cy1=137,
                                 Cx2=125, Cy2=137, Cx=125, Cy=140, h=30),
            models.UpperLipShape(Mx=110, My=145, Cx1=115, Cy1=140,
                                 Cx2=125, Cy2=140, Cx=125, Cy=142, h=0),
        ])

        models.BottomLipShape.objects.bulk_create([
            models.BottomLipShape(Mx=110, My=145, Cx1=115, Cy1=150,
                                  Cx2=135, Cy2=150, Cx=140, Cy=145, h=0),
            models.BottomLipShape(Mx=110, My=145, Cx1=115, Cy1=155,
                                  Cx2=135, Cy2=155, Cx=140, Cy=145, h=0),
            models.BottomLipShape(Mx=117, My=148, Cx1=115, Cy1=150,
                                  Cx2=135, Cy2=150, Cx=132, Cy=148, h=0),
        ])

        models.Hair.objects.bulk_create(
            chain(
                (models.Hair(image=f"img/models.Hair/{1}{j}.png",
                             width='250px', height='260px', left='-5px', top='17px')
                 for j in range(1, 7)),
                (models.Hair(image=f"img/models.Hair/{2}{j}.png",
                             width='165px', height='165px', left='37px', top='-8px')
                 for j in range(1, 7)),
                (models.Hair(image=f"img/models.Hair/{3}{j}.png",
                             width='140px', height='175px', left='57px', top='25px')
                 for j in range(1, 7))
            )
        )
