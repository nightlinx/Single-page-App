# Generated by Django 2.1.2 on 2018-11-13 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cthulhu', '0011_auto_20181112_1440'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='bottom_lip',
        ),
        migrations.RemoveField(
            model_name='character',
            name='eyes_color',
        ),
        migrations.RemoveField(
            model_name='character',
            name='face',
        ),
        migrations.RemoveField(
            model_name='character',
            name='face_color',
        ),
        migrations.RemoveField(
            model_name='character',
            name='hair',
        ),
        migrations.RemoveField(
            model_name='character',
            name='left_eye',
        ),
        migrations.RemoveField(
            model_name='character',
            name='lips_color',
        ),
        migrations.RemoveField(
            model_name='character',
            name='right_eye',
        ),
        migrations.RemoveField(
            model_name='character',
            name='upper_lip',
        ),
        migrations.AlterField(
            model_name='character',
            name='appearance',
            field=models.TextField(blank=True, default=''),
        ),
    ]
