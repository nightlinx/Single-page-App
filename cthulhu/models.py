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
    width = models.CharField(max_length=10)
    height = models.CharField(max_length=10)
    left = models.CharField(max_length=10)
    top = models.CharField(max_length=10)


class Character(models.Model):
    #part1
    name = models.CharField(max_length=100, blank=True, default="")
    gamer = models.CharField(max_length=100, blank=True, default="")
    age = models.SmallIntegerField(blank=True, default=20)
    sex = models.CharField(max_length=100, blank=True, default="")
    city = models.CharField(max_length=100, blank=True, default="")
    birthCity = models.CharField(max_length=100, blank=True, default="")
    importantPlace = models.CharField(max_length=100, blank=True, default="")
    nature = models.CharField(max_length=100, blank=True, default="")
    importantPeople = models.CharField(max_length=100, blank=True, default="")
    #part2
    strength = models.SmallIntegerField(blank=True, default=0)
    constitution = models.SmallIntegerField(blank=True, default=0)
    power = models.SmallIntegerField(blank=True, default=0)
    dexterity = models.SmallIntegerField(blank=True, default=0)
    appearance = models.SmallIntegerField(blank=True, default=0)
    size = models.SmallIntegerField(blank=True, default=0)
    intelligence = models.SmallIntegerField(blank=True, default=0)
    education = models.SmallIntegerField(blank=True, default=0)
    luck = models.SmallIntegerField(blank=True, default=0)
    magicPoints = models.SmallIntegerField(blank=True, default=0)
    damageBonus = models.CharField(max_length=100, blank=True, default="")
    build = models.CharField(max_length=100, blank=True, default="")
    hitPoints = models.SmallIntegerField(blank=True, default=0)
    sanity = models.SmallIntegerField(blank=True, default=0)
    #part3
    occupation = models.CharField(max_length=100, blank=True, default="")
    skills = models.CharField(max_length=500, blank=True, default="")
    interests = models.CharField(max_length=100, blank=True, default="")
    #part3
    weapons = models.CharField(max_length=100, blank=True, default="")
    creditRating = models.SmallIntegerField(blank=True, default=0)
    equipment = models.CharField(max_length=100, blank=True, default="")
    #part4
    face_color = models.CharField(max_length=100, blank=True, default="")
    lips_color = models.CharField(max_length=100, blank=True, default="")
    eyes_color = models.CharField(max_length=100, blank=True, default="")
    face = models.ForeignKey(FaceShape, null=True, default=None, on_delete=models.PROTECT, blank=True)
    upper_lip = models.ForeignKey(UpperLipShape, null=True, default=None, on_delete=models.PROTECT, blank=True)
    bottom_lip = models.ForeignKey(BottomLipShape, null=True, default=None, on_delete=models.PROTECT, blank=True)
    left_eye = models.ForeignKey(LeftEyeLidShape, null=True, default=None, on_delete=models.PROTECT, blank=True)
    right_eye = models.ForeignKey(RightEyeLidShape, null=True, default=None, on_delete=models.PROTECT, blank=True)
    hair = models.ForeignKey(Hair, null=True, default=None, on_delete=models.PROTECT, blank=True)
