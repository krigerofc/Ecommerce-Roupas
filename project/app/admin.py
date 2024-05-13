from django.contrib import admin
from django.contrib import admin
from .models import Users, Category, Products, Image_product, Orders, Cart, Review, Comment, PaymentMethod

# Register your models here.
admin.site.register(Users), admin.site.register(Category)
admin.site.register(Products), admin.site.register(Image_product)
admin.site.register(Orders), admin.site.register(Cart)
admin.site.register(Review), admin.site.register(Comment)
admin.site.register(PaymentMethod)