from collections import namedtuple

from rest_framework.response import Response
from rest_framework.mixins import DestroyModelMixin, CreateModelMixin
from rest_framework.viewsets import ReadOnlyModelViewSet, ViewSet
from rest_framework.views import APIView

from . import models, serializers


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

class JobViewSet(ReadOnlyModelViewSet):

    queryset = models.Job.objects.all()
    serializer_class = serializers.JobSerializer

class SkillViewSet(ReadOnlyModelViewSet):

    queryset = models.Skill.objects.all()
    serializer_class = serializers.SkillSerializer

class JobSkillViewSet(ReadOnlyModelViewSet):

    queryset = models.JobSkill.objects.all()
    serializer_class = serializers.JobSkillSerializer
