# Generated by Django 4.1.4 on 2024-05-27 11:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0002_passwordresettoken'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PasswordResetToken',
        ),
    ]