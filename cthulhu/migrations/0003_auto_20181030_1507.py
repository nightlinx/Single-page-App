# Generated by Django 2.1.2 on 2018-10-30 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cthulhu', '0002_auto_20181030_1425'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='age',
            field=models.SmallIntegerField(blank=True, default=10),
        ),
    ]