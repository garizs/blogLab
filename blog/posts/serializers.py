from rest_framework import serializers

from blog.models import Post


class PostBasicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'author', 'publish_date', 'post_type')

