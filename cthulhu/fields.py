
import base64
from mimetypes import guess_extension

from django.core.files.base import ContentFile
from rest_framework.serializers import ImageField


class Base64ImageField(ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            header, img_data = data.split(';base64,')
            mime = header.split(':')[-1]
            ext = guess_extension(mime)
            data = ContentFile(base64.b64decode(img_data), name=f'img{ext}')
        return super().to_internal_value(data)
