# Generated by Django 4.1.4 on 2022-12-18 18:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('coffeeshop', '0005_remove_coffeeshop_categories_coffeeshop_categories'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo_url', models.URLField()),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
            ],
        ),
        migrations.AlterModelOptions(
            name='category',
            options={},
        ),
        migrations.AddField(
            model_name='category',
            name='items',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='coffeeshop.item'),
        ),
    ]
