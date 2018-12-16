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
    name = models.CharField(max_length=100, default="")
    gamer = models.CharField(max_length=100, default="")
    age = models.SmallIntegerField(blank=True, default=20)
    sex = models.CharField(max_length=100, default="")
    city = models.CharField(max_length=100, default="")
    birthCity = models.CharField(max_length=100, default="")
    importantPlace = models.CharField(max_length=100, blank=True, default="")
    nature = models.CharField(max_length=100, blank=True, default="")
    importantPeople = models.CharField(max_length=100, blank=True, default="")
    # part2
    strength = models.SmallIntegerField(default=0)
    constitution = models.SmallIntegerField(default=0)
    power = models.SmallIntegerField(default=0)
    dexterity = models.SmallIntegerField(default=0)
    appear = models.SmallIntegerField(default=0)
    size = models.SmallIntegerField(default=0)
    intelligence = models.SmallIntegerField(default=0)
    education = models.SmallIntegerField(default=0)
    luck = models.SmallIntegerField(default=0)
    magicPoints = models.SmallIntegerField(default=0)
    damageBonus = models.CharField(max_length=100, default="")
    build = models.CharField(max_length=100, default="")
    hitPoints = models.SmallIntegerField(default=0)
    sanity = models.SmallIntegerField(default=0)
    # part3
    occupation = models.CharField(max_length=100, default="")
    skills = models.CharField(max_length=500,  default="")
    interests = models.CharField(max_length=100, default="")
    # part3
    weapons = models.CharField(max_length=100, default="")
    cash = models.SmallIntegerField(default=0)
    equipment = models.CharField(max_length=100, default="")
    # part4
    appearance = models.ImageField(upload_to="characters")

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)


class JobSkill(models.Model):
    job = models.ForeignKey(
        Job, null=True, default=None, on_delete=models.PROTECT, blank=True)
    skill = models.ForeignKey(
        Skill, null=True, default=None, on_delete=models.PROTECT, blank=True)
    position = models.SmallIntegerField()
