# Generated by Django 4.1.4 on 2023-02-05 15:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("coffeeshop", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="category",
            options={"verbose_name_plural": "categories"},
        ),
    ]
