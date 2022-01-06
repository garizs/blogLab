from django.utils import timezone

from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import gettext_lazy as _

from config.settings import MEDIA_ROOT


class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE,
                                verbose_name=_("Пользователь"))
    username = models.CharField(max_length=32, blank=False)
    user_first_last_name = models.CharField(max_length=256, blank=True)
    email = models.EmailField()
    profile_picture = models.ImageField(upload_to='users', default='users/default.png')
    is_banned = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_editor = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class Post(models.Model):
    POST_TYPES = (
        ('MAIN', 'Главная'),
        ('COOK', 'Кулинария'),
        ('FASHION', 'Мода'),
        ('HOT', 'Горячее'),
        ('BLOGGERS', 'Блоггеры'),
    )
    title = models.CharField(max_length=256)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    publish_date = models.DateTimeField(default=timezone.now)
    text = models.TextField(null=False, blank=False, default='Hello, World!')
    post_type = models.CharField(choices=POST_TYPES, max_length=15)

    def __str__(self):
        return self.title


class PostPicture(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post')
    images = models.ImageField(upload_to='posts', default='')

    def __str__(self):
        return self.post.title


class FavouritePosts(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
