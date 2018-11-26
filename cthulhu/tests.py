from unittest import mock

from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.test import TestCase

from rest_framework.exceptions import ValidationError
from rest_framework.request import Request

from .fields import Base64ImageField
from .models import Character
from .views import CharacterViewSet


User = get_user_model()


class Base64ImageFieldTest(TestCase):

    ext = "png"
    image_b64 = f"data:image/{ext};base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="

    @classmethod
    def setUpTestData(cls):
        cls.field = Base64ImageField()

    def test_valid_data(self):
        image = self.field.to_internal_value(self.image_b64)
        self.assertIsInstance(image, ContentFile)
        self.assertTrue(image.name.endswith(self.ext))

    def test_invalid_data(self):
        with self.subTest("data is not str"):
            data = self.image_b64.encode()
            self.assertIsInstance(data, bytes)
            with self.assertRaises(ValidationError):
                self.field.to_internal_value(data)

        with self.subTest("data is not image"):
            data = self.image_b64.replace("data:image", "data:video")
            with self.assertRaises(ValidationError):
                self.field.to_internal_value(data)


class CharacterViewSetTest(TestCase):

    view_class = CharacterViewSet

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create()
        cls.character = Character.objects.create(
            skills="a:10,b:10,c:10,",
            interests="d:10,e:10,f:10",
            weapons="g,h,i",
            equipment="j,k,l",
            owner=user,
        )
        cls.request = mock.Mock(spec=Request, user=user)

    @mock.patch("cthulhu.views.render_pdf")
    def test_sheet(self, m_render_pdf):
        view = self.view_class(request=self.request, kwargs={"pk": self.character.pk})
        view.sheet(self.request, self.character.pk)
        m_render_pdf.assert_called_once()
        template_name, context = m_render_pdf.call_args[0]
        self.assertEqual(template_name, "sheet.html")
        for key in ("character", "characters_skills", "weapons", "all_skills"):
            self.assertIn(key, context)
