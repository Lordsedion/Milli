# Generated by Django 4.1 on 2023-04-24 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0043_alter_deposit_curr'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deposit',
            name='curr',
            field=models.CharField(max_length=20),
        ),
    ]
