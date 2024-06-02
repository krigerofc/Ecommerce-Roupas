from rest_framework import serializers
from .models import *

class Top_product_API(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['id','product_name','price','quantity_sold', 'release_date']

class Product_image_API(serializers.ModelSerializer):
    class Meta:
        model = Image_product
        fields = ['product_id', 'color', 'image_url']