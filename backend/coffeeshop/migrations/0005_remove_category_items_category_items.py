# Generated by Django 4.1.4 on 2023-02-11 01:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("coffeeshop", "0004_rename_item_category_items"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="category",
            name="items",
        ),
        migrations.AddField(
            model_name="category",
            name="items",
            field=models.ManyToManyField(to="coffeeshop.item"),
        ),
    ]
