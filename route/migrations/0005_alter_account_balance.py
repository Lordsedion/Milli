# Generated by Django 4.1 on 2023-03-30 20:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0004_alter_account_balance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='balance',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='route.balance'),
        ),
    ]
