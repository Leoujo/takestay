# Generated by Django 4.1.4 on 2022-12-21 23:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffeeshop', '0013_category_items'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coffeeshop',
            name='categories',
            field=models.ManyToManyField(blank=True, to='coffeeshop.category'),
        ),
    ]