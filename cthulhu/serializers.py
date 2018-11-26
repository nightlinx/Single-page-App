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


class FaceShapeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.FaceShape


class LeftEyeLidShapeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.LeftEyeLidShape


class RightEyeLidShapeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.RightEyeLidShape


class UpperLipShapeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.UpperLipShape


class BottomLipShapeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.BottomLipShape


class HairSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.Hair


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


class AppearanceChoicesSerializer(serializers.Serializer):
    faces = FaceShapeSerializer(many=True)
    left_eyes = LeftEyeLidShapeSerializer(many=True)
    right_eyes = RightEyeLidShapeSerializer(many=True)
    upper_lips = UpperLipShapeSerializer(many=True)
    bottom_lips = BottomLipShapeSerializer(many=True)
    hair = HairSerializer(many=True)
