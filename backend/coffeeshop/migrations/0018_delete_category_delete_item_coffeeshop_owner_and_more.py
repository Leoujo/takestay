# Generated by Django 4.1.4 on 2023-01-29 18:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("owner", "0007_alter_owner_id"),
        ("coffeeshop", "0017_delete_item_remove_coffeeshop_categories_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="coffeeshop",
            name="owner",
            field=models.OneToOneField(
                null=True, on_delete=django.db.models.deletion.CASCADE, to="owner.owner"
            ),
        ),
        migrations.AlterField(
            model_name="coffeeshop",
            name="logo_url",
            field=models.URLField(blank=True, null=True),
        ),
    ]