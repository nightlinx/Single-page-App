# Generated by Django 2.1.2 on 2018-11-26 16:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cthulhu', '0016_character_appear'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='owner',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
