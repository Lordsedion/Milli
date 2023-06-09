# Generated by Django 4.1 on 2023-03-30 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0007_account_sad'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='loan',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='APE',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='Btc',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='Eth',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='Ltc',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='SAD',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='ShB',
            field=models.FloatField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='account',
            name='TRX',
            field=models.FloatField(blank=True, default=0),
        ),
    ]
