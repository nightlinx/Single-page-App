from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register('appearance', views.AppearanceViewSet, basename="appearance")
router.register('characters', views.CharacterViewSet, basename="characters")
router.register('jobs', views.JobViewSet, basename="jobs")
router.register('skills', views.SkillViewSet, basename="skills")
router.register('job-skills', views.JobSkillViewSet, basename="job-skill")

urlpatterns = router.urls
