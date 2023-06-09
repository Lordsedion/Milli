# Generated by Django 4.1 on 2023-04-21 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0029_account_balance'),
    ]

    operations = [
        migrations.RenameField(
            model_name='account',
            old_name='loan',
            new_name='bonus',
        ),
        migrations.AddField(
            model_name='account',
            name='deposit',
            field=models.FloatField(blank=True, default=0.0),
        ),
        migrations.AddField(
            model_name='account',
            name='profit',
            field=models.IntegerField(default=0.0, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='withdrawal',
            field=models.FloatField(blank=True, default=0.0),
        ),
    ]
