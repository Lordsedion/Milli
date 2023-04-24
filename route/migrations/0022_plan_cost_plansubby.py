# Generated by Django 4.1 on 2023-04-04 18:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('route', '0021_alter_account_plans'),
    ]

    operations = [
        migrations.AddField(
            model_name='plan',
            name='cost',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='PlanSubby',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('P_id', models.IntegerField(default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
