# Generated by Django 2.1.2 on 2018-11-12 13:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cthulhu', '0010_auto_20181112_1423'),
    ]

    operations = [
        migrations.RenameField(
            model_name='characterskill',
            old_name='character_id',
            new_name='character',
        ),
        migrations.RenameField(
            model_name='characterskill',
            old_name='skill_id',
            new_name='skill',
        ),
        migrations.RenameField(
            model_name='jobskill',
            old_name='job_id',
            new_name='job',
        ),
        migrations.RenameField(
            model_name='jobskill',
            old_name='skill_id',
            new_name='skill',
        ),
    ]
