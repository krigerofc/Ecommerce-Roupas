from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
# Create your views here.

class Top_product_view(APIView):
    def get(self, request):
        top_selling = Products.objects.order_by('-quantity_sold')[:5]
        top_serializer = Top_product_API(top_selling, many=True)
        top_serializer_data = top_serializer.data
        
        for product in top_serializer_data:
            images = Image_product.objects.filter(product_id=product['id'])
            product['images'] = [{'id': image.id, 'color': image.color, 'image': image.image_url} for image in images]

        latest_product = Products.objects.order_by('-release_date')[:5]
        latest_serializer = Top_product_API(latest_product, many=True)
        latest_data = latest_serializer.data

        for product in latest_data:
            images = Image_product.objects.filter(product_id=product['id'])
            product['images'] = [{'id':image.id, 'color':image.color, 'image':image.image_url} for image in images]

        data = {
            'top_selling':top_serializer_data,
            'latest_product':latest_data
        }

        return Response(data)