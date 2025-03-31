from django.db import models
from django_ckeditor_5.fields import CKEditor5Field
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    """
    A category for blog posts.
    """
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        """
        Meta options for the Category model.
        """
        verbose_name_plural = 'Categories'


class Post(models.Model):
    """
    A blog post.
    """
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = CKEditor5Field('Text', config_name='extends')
    featured_image = models.ImageField(upload_to='posts/', blank=True, null=True)
    excerpt = models.TextField(blank=True) # campo vacio
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    published_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    status = models.CharField(
        max_length=10,
        choices=[
            ('draft', 'Draft'),
            ('published', 'Published')
        ],
        default='draft'
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['-published_date']


class Comment(models.Model):
    """
    A comment on a post.
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ['-created_date']
