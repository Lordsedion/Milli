# Generated by Django 4.1 on 2023-04-22 09:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('route', '0031_remove_deposit_user_deposit_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deposit',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
