from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register('appearance', views.AppearanceViewSet, basename="appearance")
router.register('characters', views.CharacterViewSet, basename="characters")

urlpatterns = router.urls
