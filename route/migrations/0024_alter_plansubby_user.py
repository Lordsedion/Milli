# Generated by Django 4.1 on 2023-04-04 18:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('route', '0023_rename_p_id_plansubby_p_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plansubby',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
