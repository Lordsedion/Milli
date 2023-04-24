# Generated by Django 4.1 on 2023-04-24 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0044_alter_deposit_curr'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plan',
            old_name='rate',
            new_name='maxRate',
        ),
        migrations.AddField(
            model_name='plan',
            name='duration',
            field=models.IntegerField(default=7),
        ),
        migrations.AddField(
            model_name='plan',
            name='maximum',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='plan',
            name='minRate',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='plan',
            name='minimum',
            field=models.FloatField(default=0.0),
        ),
    ]