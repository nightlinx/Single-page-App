# Generated by Django 2.1.2 on 2018-10-29 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BottomLipShape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Mx', models.SmallIntegerField()),
                ('My', models.SmallIntegerField()),
                ('Cx1', models.SmallIntegerField()),
                ('Cy1', models.SmallIntegerField()),
                ('Cx2', models.SmallIntegerField()),
                ('Cy2', models.SmallIntegerField()),
                ('Cx', models.SmallIntegerField()),
                ('Cy', models.SmallIntegerField()),
                ('h', models.SmallIntegerField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gamer', models.CharField(max_length=100)),
                ('age', models.SmallIntegerField()),
                ('sex', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('birthCity', models.CharField(max_length=100)),
                ('importantPlace', models.CharField(max_length=100)),
                ('nature', models.CharField(max_length=100)),
                ('importantPeople', models.CharField(max_length=100)),
                ('strength', models.SmallIntegerField()),
                ('constitution', models.SmallIntegerField()),
                ('power', models.SmallIntegerField()),
                ('dexterity', models.SmallIntegerField()),
                ('appearance', models.SmallIntegerField()),
                ('size', models.SmallIntegerField()),
                ('intelligence', models.SmallIntegerField()),
                ('education', models.SmallIntegerField()),
                ('luck', models.SmallIntegerField()),
                ('magicPoints', models.SmallIntegerField()),
                ('damageBonus', models.SmallIntegerField()),
                ('build', models.SmallIntegerField()),
                ('hitPoints', models.SmallIntegerField()),
                ('sanity', models.SmallIntegerField()),
                ('occupation', models.CharField(max_length=100)),
                ('skills', models.CharField(max_length=100)),
                ('interests', models.CharField(max_length=100)),
                ('weapons', models.CharField(max_length=100)),
                ('creditRating', models.SmallIntegerField()),
                ('equipment', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='FaceShape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Mx', models.SmallIntegerField()),
                ('My', models.SmallIntegerField()),
                ('rx', models.SmallIntegerField()),
                ('ry', models.SmallIntegerField()),
                ('x', models.SmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Hair',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('skills', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='LeftEyeLidShape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Mx', models.SmallIntegerField()),
                ('My', models.SmallIntegerField()),
                ('Cx1', models.SmallIntegerField()),
                ('Cy1', models.SmallIntegerField()),
                ('Cx2', models.SmallIntegerField()),
                ('Cy2', models.SmallIntegerField()),
                ('Cx', models.SmallIntegerField()),
                ('Cy', models.SmallIntegerField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='RightEyeLidShape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Mx', models.SmallIntegerField()),
                ('My', models.SmallIntegerField()),
                ('Cx1', models.SmallIntegerField()),
                ('Cy1', models.SmallIntegerField()),
                ('Cx2', models.SmallIntegerField()),
                ('Cy2', models.SmallIntegerField()),
                ('Cx', models.SmallIntegerField()),
                ('Cy', models.SmallIntegerField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UpperLipShape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Mx', models.SmallIntegerField()),
                ('My', models.SmallIntegerField()),
                ('Cx1', models.SmallIntegerField()),
                ('Cy1', models.SmallIntegerField()),
                ('Cx2', models.SmallIntegerField()),
                ('Cy2', models.SmallIntegerField()),
                ('Cx', models.SmallIntegerField()),
                ('Cy', models.SmallIntegerField()),
                ('h', models.SmallIntegerField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]