# Generated by Django 2.1.2 on 2018-10-31 10:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cthulhu', '0006_auto_20181030_1543'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='bottom_lips',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, to='cthulhu.BottomLipShape'),
        ),
    ]
