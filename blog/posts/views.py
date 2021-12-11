from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from blog.models import Post, FavouritePosts
from blog.posts.serializers import PostBasicSerializer


class PostsBasicView(viewsets.ModelViewSet):
    serializer_class = PostBasicSerializer
    queryset = Post.objects.all()


class PostsViewSet(PostsBasicView):

    @action(detail=False, methods=['get'])
    def get_main_posts(self, request):
        main_posts = Post.objects.filter(post_type='Главная')

        serializer = self.get_serializer(main_posts, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def get_favourites_posts(self, request):
        body = request.data
        user = body.get('username')
        favourites_posts = FavouritePosts.objects.filter(user__username=user).values('post_id')
        data = Post.objects.filter(id__in=favourites_posts)

        serializer = self.get_serializer(data, many=True)
        return Response(serializer.data)
