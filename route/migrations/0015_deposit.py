# Generated by Django 4.1 on 2023-04-03 22:42

from django.conf import settings
from django.db import migrations, models
import route.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('route', '0014_alter_withdraw_curr'),
    ]

    operations = [
        migrations.CreateModel(
            name='Deposit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(blank=True, default=0)),
                ('curr', models.CharField(max_length=3)),
                ('w_id', models.CharField(default=route.models.withdraw, max_length=12)),
                ('s_proof', models.ImageField(upload_to='deposits_pics')),
                ('user', models.ManyToManyField(null=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
