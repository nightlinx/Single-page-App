from itertools import chain

from django.core.management.base import BaseCommand
from cthulhu import models


class Command(BaseCommand):
    help = 'Populates appearance and models.Jobs choices in database'

    def handle(self, *args, **options):

        models.Job.objects.bulk_create([
            models.Job(name="Antykwariusz"),
            models.Job(name="Bogaty hobbysta"),
            models.Job(name="Detektyw policyjny"),
            models.Job(name="Dziennikarz"),
            models.Job(name="Lakarz"),
            models.Job(name="Pisarz"),
            models.Job(name="Profesor"),
            models.Job(name="Prywatny detektyw"),
        ])

        models.Skill.objects.bulk_create([
            models.Skill(name="Antropologia", base_value=1),
            models.Skill(name="Archeologia", base_value=1),
            models.Skill(name="Broń Palna (Długa)", base_value=20),
            models.Skill(name="Bron Palna (Krótka)", base_value=20),
            models.Skill(name="Charakteryzacja", base_value=5),
            models.Skill(name="Elektryka", base_value=10),
            models.Skill(name="Gadanina", base_value=15),
            models.Skill(name="Historia", base_value=5),
            models.Skill(name="Jeździectwo", base_value=5),
            models.Skill(name="Język Obcy", base_value=1),
            models.Skill(name="Korzystanie z Bibliotek", base_value=20),
            models.Skill(name="Mechanika", base_value=1),
            models.Skill(name="Medycyna", base_value=1),
            models.Skill(name="Nasłuchiwanie", base_value=20),
            models.Skill(name="Nauka", base_value=1),
            models.Skill(name="Nawigacja", base_value=10),
            models.Skill(name="Obsługa Ciezkiego Sprzętu", base_value=1),
            models.Skill(name="Okultyzm", base_value=5),
            models.Skill(name="Perswazja", base_value=10),
            models.Skill(name="Pierwsza Pomoc", base_value=30),
            models.Skill(name="Pilotowanie", base_value=1),
            models.Skill(name="Pływanie", base_value=20),
            models.Skill(name="Prawo", base_value=5),
            models.Skill(name="Prowadzenie", base_value=20),
            models.Skill(name="Psychoanaliza", base_value=1),
            models.Skill(name="Psychologia", base_value=10),
            models.Skill(name="Rzucanie", base_value=20),
            models.Skill(name="Spostrzegawczosc", base_value=25),
            models.Skill(name="Sztuka/Rzemiosło", base_value=5),
            models.Skill(name="Sztuka Przetrwania", base_value=10),
            models.Skill(name="Slusarstwo", base_value=1),
            models.Skill(name="Tropienie", base_value=10),
            models.Skill(name="Urok Osobisty", base_value=15),
            models.Skill(name="Ukrywanie", base_value=20),
            models.Skill(name="Walka Wręcz (Bijatyka)", base_value=25),
            models.Skill(name="Wspinaczka", base_value=20),
            models.Skill(name="Wycena", base_value=5),
            models.Skill(name="Zastraszanie", base_value=15),
            models.Skill(name="Zreczne Palce", base_value=10),
            models.Skill(name="Majętność", base_value=0),
        ])


        models.JobSkill.objects.bulk_create([
            models.JobSkill(job_id=1, skill_id=37, position=1),
            models.JobSkill(job_id=1, skill_id=29, position=2),
            models.JobSkill(job_id=1, skill_id=8, position=3),
            models.JobSkill(job_id=1, skill_id=11, position=4),
            models.JobSkill(job_id=1, skill_id=33, position=5),
            models.JobSkill(job_id=1, skill_id=7, position=5),
            models.JobSkill(job_id=1, skill_id=38, position=5),
            models.JobSkill(job_id=1, skill_id=19, position=5),
            models.JobSkill(job_id=1, skill_id=28, position=6),
            models.JobSkill(job_id=1, skill_id=10, position=7),
            models.JobSkill(job_id=1, skill_id=None, position=8),
            models.JobSkill(job_id=1, skill_id=40, position=9),

            models.JobSkill(job_id=2, skill_id=29, position=1),
            models.JobSkill(job_id=2, skill_id=4, position=2),
            models.JobSkill(job_id=2, skill_id=10, position=3),
            models.JobSkill(job_id=2, skill_id=9, position=4),
            models.JobSkill(job_id=2, skill_id=33, position=5),
            models.JobSkill(job_id=2, skill_id=7, position=5),
            models.JobSkill(job_id=2, skill_id=38, position=5),
            models.JobSkill(job_id=2, skill_id=19, position=5),
            models.JobSkill(job_id=2, skill_id=None, position=6),
            models.JobSkill(job_id=2, skill_id=None, position=7),
            models.JobSkill(job_id=2, skill_id=None, position=8),
            models.JobSkill(job_id=2, skill_id=40, position=9),
        ])
