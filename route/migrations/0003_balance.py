# Generated by Django 4.1 on 2023-03-30 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0002_alter_account_acc_no'),
    ]

    operations = [
        migrations.CreateModel(
            name='Balance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('balance', models.IntegerField(blank=True, default=0)),
            ],
        ),
    ]
