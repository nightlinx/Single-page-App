from rest_framework.decorators import action
from rest_framework.mixins import DestroyModelMixin, CreateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet

from . import models, serializers
from .models import Skill
import pdfkit
from django.http import HttpResponse
from django.template.loader import get_template


def render_character_sheet(path: str, params: dict):
    template = get_template(path)
    html = template.render(params)
    pdf_file = pdfkit.from_string(html, None, options = {'quiet': ''})
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
        equipment = instance.equipment.split(",")

        skill_queryset = Skill.objects.all()
        base_skills = []
        all_skills = []
        for i in skill_queryset:
            base_skills.append({'name': i.name, 'value': i.base_value})

        for bs in base_skills:
            skill = next(filter(lambda x: x['name'] == bs['name'], characters_skills), bs)
            all_skills.append(skill)

        part1_skills = all_skills[:14]
        part2_skills = all_skills[14:28]
        part3_skills = all_skills[28:]

        return render_character_sheet('sheet.html', {
            "character": instance,
            'characters_skills': characters_skills,
            'weapons': weapons,
            'equipment': equipment,
            'all_skills': all_skills,
            'part1': part1_skills,
            'part2': part2_skills,
            'part3': part3_skills,
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
