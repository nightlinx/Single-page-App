from rest_framework import serializers

from . import models


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = models.Job


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

    class Meta:
        fields = '__all__'
        model = models.Character
        depth = 1


class AppearanceChoicesSerializer(serializers.Serializer):
    jobs = JobSerializer(many=True)
    faces = FaceShapeSerializer(many=True)
    left_eyes = LeftEyeLidShapeSerializer(many=True)
    right_eyes = RightEyeLidShapeSerializer(many=True)
    upper_lips = UpperLipShapeSerializer(many=True)
    bottom_lips = BottomLipShapeSerializer(many=True)
    hair = HairSerializer(many=True)