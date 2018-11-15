from collections import namedtuple

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.mixins import DestroyModelMixin, CreateModelMixin
from rest_framework.viewsets import ReadOnlyModelViewSet, ViewSet
from rest_framework.views import APIView

from . import models, serializers
from django.shortcuts import render
from .models import Character

class AppearanceViewSet(ViewSet):

    appearance_class = namedtuple(
        "Appearance",
        [
            "faces",
            "left_eyes",
            "right_eyes",
            "upper_lips",
            "bottom_lips",
            "hair",
        ]
    )
    serializer_class = serializers.AppearanceChoicesSerializer

    def get_object(self):
        return self.appearance_class(
            faces=models.FaceShape.objects.all(),
            left_eyes=models.LeftEyeLidShape.objects.all(),
            right_eyes=models.RightEyeLidShape.objects.all(),
            upper_lips=models.UpperLipShape.objects.all(),
            bottom_lips=models.BottomLipShape.objects.all(),
            hair=models.Hair.objects.all(),
        )

    def list(self, request):
        serializer = serializers.AppearanceChoicesSerializer(
            instance=self.get_object())
        return Response(serializer.data)


class CharacterViewSet(DestroyModelMixin, CreateModelMixin, ReadOnlyModelViewSet):

    queryset = models.Character.objects.all()
    serializer_class = serializers.CharacterSerializer

    @action(detail=True, methods=["GET"])
    def sheet(self, request, pk=None):
        instance = self.get_object()
        name = instance.name
        gamer = instance.gamer
        age = instance.age
        sex = instance.sex
        city = instance.city
        birthCity = instance.birthCity
        importantPlace = instance.importantPlace
        nature = instance.nature
        importantPeople = instance.importantPeople
        strength = instance.strength
        constitution = instance.constitution
        power = instance.power
        dexterity = instance.dexterity
        appearance = instance.appearance
        size = instance.size
        intelligence = instance.intelligence
        education = instance.education
        luck = instance.luck
        magicPoints = instance.magicPoints
        damageBonus = instance.damageBonus
        build = instance.build
        hitPoints = instance.hitPoints
        sanity = instance.sanity
        occupation = instance.occupation
        skills = instance.skills.split(",")
        interests = instance.interests.split(",")
        weapons = instance.weapons.split(",")
        equipment = instance.equipment.split(",")
        return render(request, 'sheet.html', {
            'name': name,
            'gamer': gamer,
            'age': age,
            'sex': sex,
            'city': city,
            'birthCity': birthCity,
            'importantPlace': importantPlace,
            'nature': nature,
            'importantPeople': importantPeople,
            'strength': strength,
            'constitution': constitution,
            'power': power,
            'dexterity': dexterity,
            'appearance': appearance,
            'size': size,
            'intelligence': intelligence,
            'education': education,
            'luck': luck,
            'magicPoints': magicPoints,
            'damageBonus': damageBonus,
            'build': build,
            'hitPoints': hitPoints,
            'sanity': sanity,
            'skills': skills,
            'interests': interests,
            'job': occupation,
            'weapons': weapons,
            'equipment': equipment,
            })

class JobViewSet(ReadOnlyModelViewSet):

    queryset = models.Job.objects.all()
    serializer_class = serializers.JobSerializer

class SkillViewSet(ReadOnlyModelViewSet):

    queryset = models.Skill.objects.all()
    serializer_class = serializers.SkillSerializer

class JobSkillViewSet(ReadOnlyModelViewSet):

    queryset = models.JobSkill.objects.all()
    serializer_class = serializers.JobSkillSerializer
