# Generated by Django 3.2.7 on 2021-09-28 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vinyl',
            name='countInStoke',
        ),
        migrations.AddField(
            model_name='vinyl',
            name='countInStock',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
