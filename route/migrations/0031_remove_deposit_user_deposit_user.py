# Generated by Django 4.1 on 2023-04-22 09:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('route', '0030_rename_loan_account_bonus_account_deposit_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deposit',
            name='user',
        ),
        migrations.AddField(
            model_name='deposit',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
