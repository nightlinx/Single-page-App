# Generated by Django 2.1.2 on 2018-11-15 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cthulhu', '0015_auto_20181114_2258'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='appear',
            field=models.SmallIntegerField(blank=True, default=0),
        ),
    ]