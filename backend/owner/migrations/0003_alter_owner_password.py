# Generated by Django 4.1.4 on 2022-12-26 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('owner', '0002_rename_user_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='owner',
            name='password',
            field=models.CharField(max_length=200),
        ),
    ]