<<<<<<< HEAD
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from blog.models import PostPicture, Post


class PostPictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPicture
        fields = ('images',)


class PostBasicSerializer(serializers.ModelSerializer):
    images = PostPictureSerializer(read_only=True, source='post', many=True)

    class Meta:
        model = Post
        fields = ('title', 'author', 'publish_date', 'post_type', 'text', 'images',)
=======
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from blog.models import PostPicture, Post


class PostPictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPicture
        fields = ('images',)


class PostBasicSerializer(serializers.ModelSerializer):
    images = PostPictureSerializer(read_only=True, source='post', many=True)

    class Meta:
        model = Post
        fields = ('title', 'author', 'publish_date', 'post_type', 'text', 'images',)
>>>>>>> 388b16a1aeafe6dc6c48fa3beadb9946f64d51ea
