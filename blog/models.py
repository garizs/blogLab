from django.utils import timezone

from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import gettext_lazy as _


class UserRole(models.Model):
    role_name = models.CharField(max_length=32)
    is_admin = models.BooleanField(default=False)
    is_editor = models.BooleanField(default=False)


class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE,
                                verbose_name=_("Пользователь"))
    username = models.CharField(max_length=32, blank=False)
    email = models.EmailField()
    profile_picture = models.ImageField(upload_to='users', default='users/default.img')
    role = models.OneToOneField(UserRole, on_delete=models.CASCADE)
    is_banned = models.BooleanField(default=False)


class Post(models.Model):
    title = models.CharField(max_length=256)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    publish_date = models.DateTimeField(default=timezone.now)
    images = models.ImageField(upload_to='posts', default='')

    post_type = models.CharField(max_length=256)


class FavouritePosts(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
