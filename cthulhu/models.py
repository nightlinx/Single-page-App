from django.conf import settings
from django.db import models


class Job(models.Model):
    name = models.CharField(max_length=100)

    def __repr__(self):
        return '<Job %r>' % self.name


class Skill(models.Model):
    name = models.CharField(max_length=100)
    base_value = models.SmallIntegerField()


class Character(models.Model):
    # part1
    name = models.CharField(max_length=100, blank=True, default="")
    gamer = models.CharField(max_length=100, blank=True, default="")
    age = models.SmallIntegerField(blank=True, default=20)
    sex = models.CharField(max_length=100, blank=True, default="")
    city = models.CharField(max_length=100, blank=True, default="")
    birthCity = models.CharField(max_length=100, blank=True, default="")
    importantPlace = models.CharField(max_length=100, blank=True, default="")
    nature = models.CharField(max_length=100, blank=True, default="")
    importantPeople = models.CharField(max_length=100, blank=True, default="")
    # part2
    strength = models.SmallIntegerField(blank=True, default=0)
    constitution = models.SmallIntegerField(blank=True, default=0)
    power = models.SmallIntegerField(blank=True, default=0)
    dexterity = models.SmallIntegerField(blank=True, default=0)
    appear = models.SmallIntegerField(blank=True, default=0)
    size = models.SmallIntegerField(blank=True, default=0)
    intelligence = models.SmallIntegerField(blank=True, default=0)
    education = models.SmallIntegerField(blank=True, default=0)
    luck = models.SmallIntegerField(blank=True, default=0)
    magicPoints = models.SmallIntegerField(blank=True, default=0)
    damageBonus = models.CharField(max_length=100, blank=True, default="")
    build = models.CharField(max_length=100, blank=True, default="")
    hitPoints = models.SmallIntegerField(blank=True, default=0)
    sanity = models.SmallIntegerField(blank=True, default=0)
    # part3
    occupation = models.CharField(max_length=100, blank=True, default="")
    skills = models.CharField(max_length=500, blank=True, default="")
    interests = models.CharField(max_length=100, blank=True, default="")
    # part3
    weapons = models.CharField(max_length=100, blank=True, default="")
    cash = models.SmallIntegerField(blank=True, default=0)
    equipment = models.CharField(max_length=100, blank=True, default="")
    # part4
    appearance = models.ImageField(blank=True, upload_to="characters")

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)


class JobSkill(models.Model):
    job = models.ForeignKey(
        Job, null=True, default=None, on_delete=models.PROTECT, blank=True)
    skill = models.ForeignKey(
        Skill, null=True, default=None, on_delete=models.PROTECT, blank=True)
    position = models.SmallIntegerField()
