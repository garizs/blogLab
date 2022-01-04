from django.contrib import admin

from blog.models import Post, UserProfile

admin.site.register(Post)
admin.site.register(UserProfile)
