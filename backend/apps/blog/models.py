from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    def __str__(self) -> str:
        return self.name        


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    author = models.CharField(max_length=200)
    featured_image = models.ImageField(upload_to='posts', blank=True, null=True)
    excerpt = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    published_date = models.DateField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    status = models.CharField(
        max_length=10,
        choices=[('draft', 'Draft'), ('published', 'Published')],
        default='draft',
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-published_date']
