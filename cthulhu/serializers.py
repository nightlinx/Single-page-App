from rest_framework import serializers

from . import models
from .fields import Base64ImageField


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.Job


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.Skill

class CharacterSerializer(serializers.ModelSerializer):
    appearance = Base64ImageField()
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Character
        fields = "__all__"


class JobSkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.JobSkill
        fields = "__all__"
