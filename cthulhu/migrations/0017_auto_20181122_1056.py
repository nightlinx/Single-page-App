# Generated by Django 2.1.2 on 2018-11-22 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cthulhu', '0016_character_appear'),
    ]

    operations = [
        migrations.DeleteModel(
            name='BottomLipShape',
        ),
        migrations.DeleteModel(
            name='FaceShape',
        ),
        migrations.DeleteModel(
            name='Hair',
        ),
        migrations.DeleteModel(
            name='LeftEyeLidShape',
        ),
        migrations.DeleteModel(
            name='RightEyeLidShape',
        ),
        migrations.DeleteModel(
            name='UpperLipShape',
        ),
    ]
