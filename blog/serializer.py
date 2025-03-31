from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'name', 'email', 'content', 'created_date', 'approved')
        read_only_fields = ('created_date',) # read only fields

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    category = CategorySerializer(read_only=True) # read only fields
    comments = CommentSerializer(many=True, read_only=True) # read only fields and many=True for multiple comments

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'slug',
            'content',
            'excerpt',
            'category',
            'comments',
            'author',
            'published_date',
            'status'
        )
