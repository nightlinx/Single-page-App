from collections import namedtuple

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.mixins import DestroyModelMixin, CreateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet, ViewSet

from . import models, serializers
from django.shortcuts import render
from .models import Skill

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


import pdfkit
from django.http import HttpResponse
from django.template.loader import get_template

def render_pdf(path: str, params: dict):
    template = get_template(path)
    html = template.render(params)
    pdf_file = pdfkit.from_string(html, False)
    response = HttpResponse(pdf_file, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="report.pdf"'
    return response


class CharacterViewSet(DestroyModelMixin, CreateModelMixin, ReadOnlyModelViewSet):

    queryset = models.Character.objects.all()
    serializer_class = serializers.CharacterSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return super().get_queryset().filter(owner=self.request.user)

    @action(detail=True, methods=["GET"])
    def sheet(self, request, pk=None):
        instance = self.get_object()
        skills = instance.skills.split(",")
        skills.remove('')
        interests = instance.interests.split(",")
        characters_skills = []
        for i in interests:
            name, value = i.split(":")
            characters_skills.append({'name': name.strip(), 'value': int(value)+20})
        for i in skills:
            name, value = i.split(":")
            characters_skills.append({'name': name.strip(), 'value': int(value)})

        weapons = instance.weapons.split(",")
        creditRating = instance.creditRating
        equipment = instance.equipment.split(",")

        skill_queryset = Skill.objects.all()
        base_skills = []
        all_skills = []
        for i in skill_queryset:
            base_skills.append({'name': i.name, 'value': i.base_value})

        for bs in base_skills:
            skill = next(filter(lambda x: x['name'] == bs['name'], characters_skills), bs)
            all_skills.append(skill)

        return render_pdf('sheet.html', {
            "character": instance,
            'characters_skills': characters_skills,
            'weapons': weapons,
            'equipment': equipment,
            'all_skills': all_skills,
            })

class JobViewSet(ReadOnlyModelViewSet):

    queryset = models.Job.objects.all()
    serializer_class = serializers.JobSerializer

class SkillViewSet(ReadOnlyModelViewSet):

    queryset = models.Skill.objects.all()
    serializer_class = serializers.SkillSerializer

    @action(detail=True, methods=["GET"])
    def sheet(self, request, pk=None):
        instance = self.get_object()
        return render(request, 'sheet.html', {
            'allSkills': instance,
            })

class JobSkillViewSet(ReadOnlyModelViewSet):

    queryset = models.JobSkill.objects.all()
    serializer_class = serializers.JobSkillSerializer
