from django.db import models


class Job(models.Model):
    name = models.CharField(max_length=100)
    skills = models.CharField(max_length=100)

    def __repr__(self):
        return '<Job %r>' % self.name


class FaceShape(models.Model):
    Mx = models.SmallIntegerField()
    My = models.SmallIntegerField()
    rx = models.SmallIntegerField()
    ry = models.SmallIntegerField()
    x = models.SmallIntegerField()


class BaseEyeLid(models.Model):
    Mx = models.SmallIntegerField()
    My = models.SmallIntegerField()
    Cx1 = models.SmallIntegerField()
    Cy1 = models.SmallIntegerField()
    Cx2 = models.SmallIntegerField()
    Cy2 = models.SmallIntegerField()
    Cx = models.SmallIntegerField()
    Cy = models.SmallIntegerField()


    class Meta:
        abstract = True

class LeftEyeLidShape(BaseEyeLid):
    pass


class RightEyeLidShape(BaseEyeLid):
    pass


class BaseLip(models.Model):
    Mx = models.SmallIntegerField()
    My = models.SmallIntegerField()
    Cx1 = models.SmallIntegerField()
    Cy1 = models.SmallIntegerField()
    Cx2 = models.SmallIntegerField()
    Cy2 = models.SmallIntegerField()
    Cx = models.SmallIntegerField()
    Cy = models.SmallIntegerField()
    h = models.SmallIntegerField()

    class Meta:
        abstract = True


class UpperLipShape(BaseLip):
    pass


class BottomLipShape(BaseLip):
    pass


class Hair(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)


class Character(models.Model):
    #part1
    name = models.CharField(max_length=100)
    gamer = models.CharField(max_length=100)
    age = models.SmallIntegerField()
    sex = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    birthCity = models.CharField(max_length=100)
    importantPlace = models.CharField(max_length=100)
    nature = models.CharField(max_length=100)
    importantPeople = models.CharField(max_length=100)
    #part2
    strength = models.SmallIntegerField()
    constitution = models.SmallIntegerField()
    power = models.SmallIntegerField()
    dexterity = models.SmallIntegerField()
    appearance = models.SmallIntegerField()
    size = models.SmallIntegerField()
    intelligence = models.SmallIntegerField()
    education = models.SmallIntegerField()
    luck = models.SmallIntegerField()
    magicPoints = models.SmallIntegerField()
    damageBonus = models.SmallIntegerField()
    build = models.SmallIntegerField()
    hitPoints = models.SmallIntegerField()
    sanity = models.SmallIntegerField()
    #part3
    occupation = models.CharField(max_length=100)
    skills = models.CharField(max_length=100)
    interests = models.CharField(max_length=100)
    #part3
    weapons = models.CharField(max_length=100)
    creditRating = models.SmallIntegerField()
    equipment = models.CharField(max_length=100)
