from django.db import models

# Create your models here.
class Users(models.Model):
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Feminino'),
        ('O', 'Outro'),
    ]
    username = models.CharField(max_length=150, unique=True, blank=False, null=False)
    password = models.CharField(max_length=128, blank=False, null=False)  # Você não armazena a senha diretamente, mas sim o hash dela
    email = models.EmailField(unique=True, db_index=True, blank=False, null=False)
    numero = models.CharField(max_length=20, blank=False, null=False)
    nome_completo = models.CharField(max_length=255, blank=False, null=False)
    data_registro = models.DateTimeField(auto_now_add=True)
    ultimo_login = models.DateTimeField(null=True, blank=True)
    genero = models.CharField(max_length=1, choices=GENDER_CHOICES,blank=False, null=False)
    data_aniversario = models.DateField(blank=False, null=False)

    # Informações de endereço
    pais = models.CharField(max_length=100)
    rua = models.CharField(max_length=255)
    bairro = models.CharField(max_length=100)
    numero_casa = models.CharField(max_length=20)
    cep = models.CharField(max_length=20)

    def __str__(self):
        return self.username

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Nome da categoria
    description = models.TextField()  # Descrição opcional da categoria

    def __str__(self):
        return self.name
        
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Nome da categoria
    description = models.TextField()  # Descrição opcional da categoria

    def __str__(self):
        return self.name
        

class Products(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('U', 'Unisex'),
    ]

    SIZE_CHOICES = {
        ('PP', 'PP'),
        ('P', 'P'),
        ('M', 'M'),
        ('G', 'G'),
        ('GG', 'GG')
    }

    DISCOUNT_CHOICES = (
        (5, '5%'), (0, '0%'), (10, '10%'), (15, '15%'), 
        (20, '20%'), (25, '25%'), (30, '30%'), (50, '50%'),
    )
    # info basic
    product_name = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=False, null=False, default='M')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    discount = models.DecimalField(max_digits=2, decimal_places=0, choices=DISCOUNT_CHOICES, blank=False, null=False, default=0)
    size = models.CharField(max_length=2, choices=SIZE_CHOICES, blank=False, null=False, default='M')
    quantity_available = models.IntegerField(default=0, blank=False, null=False) #estoque
    quantity_sold = models.IntegerField(default=0, blank=False, null=False)

    # Info product
    availability = models.BooleanField(default=True, blank=False, null=False)
    release_date = models.DateField(blank=False, null=False)

    def __str__(self):
        return self.product_name
    
class Image_product(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    color = models.CharField(max_length=50, blank=False, null=False)
    image_url = models.URLField(max_length=400, blank=False, null=False)
    def __str__(self):
        return str(self.product_id)

class Orders(models.Model):
    STATUS_CHOICES = [
        ('P', 'Pendente'),
        ('C', 'Confirmado'),
        ('E', 'Enviado'),
        ('F', 'Finalizado'),
        ('C', 'Cancelado'),
    ]
    METHOD_CHOICES = [
        ('CC', 'Cartão de Crédito'),
        ('CD', 'Cartão de Débito'),
        ('BL', 'Boleto'),
        ('TR', 'Transferência Bancária'),
        ('PP', 'PayPal'),
        ('OT', 'Outro'),
    ]
    
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)  # Quantidade do produto no pedido
    total_price = models.DecimalField(max_digits=10, decimal_places=2)  # Preço total do pedido
    order_date = models.DateTimeField(auto_now_add=True)  # Data do pedido
    status = models.CharField(max_length=20)  # Status do pedido (por exemplo, "Em processamento", "Enviado", "Entregue", etc.)
    notas = models.TextField(blank=True, null=True)
    numero_rastreamento = models.CharField(max_length=50, blank=True, null=True)
    payment_method = models.CharField(max_length=2, choices=METHOD_CHOICES, blank=True, null=True)
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True) 


    def __str__(self):
        return self.id
from django.db import models

class Cart(models.Model):
    STATUS_CHOICES = [
        ('O', 'Aberto'),
        ('C', 'Fechado'),
        ('P', 'Pago'),
    ]
    
    user = models.ForeignKey(Users, on_delete=models.CASCADE, blank=False, null=False)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, blank=False, null=False)
    quantity = models.IntegerField(default=1)  # Quantidade do produto no carrinho
    total_price = models.DecimalField(max_digits=10, decimal_places=2)  # Preço total do item no carrinho
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='O')  # Status do carrinho
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'product', 'status')  # Garante que um usuário só pode ter um item de um produto em um determinado estado de carrinho

    def __str__(self):
        return f"{self.user.username}'s cart ({self.product.product_name})"
    
class Review(models.Model):
    RATING_CHOICES = [
        (1, '1 Estrela'),
        (2, '2 Estrelas'),
        (3, '3 Estrelas'),
        (4, '4 Estrelas'),
        (5, '5 Estrelas'),
    ]

    user = models.ForeignKey(Users, on_delete=models.CASCADE, blank=False, null=False)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, blank=False, null=False)
    rating = models.IntegerField(choices=RATING_CHOICES)
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'product')  # Garante que um usuário só pode avaliar um produto uma vez

    def __str__(self):
        return f"Avaliação de {self.product.product_name} por {self.user.username}"


class Comment(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE, blank=False, null=False)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, blank=False, null=False)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Comentário de {self.user.username} sobre {self.product.product_name}"
    
class PaymentMethod(models.Model):
    METHOD_CHOICES = [
        ('CC', 'Cartão de Crédito'),
        ('B', 'Boleto Bancário'),
        ('P', 'Pix'),
        ('T', 'Transferência Bancária'),
        ('PP', 'PayPal'),
        ('V', 'Outro'),
    ]

    METHOD_CHOICES = [
        ('CC', 'Cartão de Crédito'),
        ('B', 'Boleto Bancário'),
        ('P', 'Pix'),
        ('T', 'Transferência Bancária'),
        ('PP', 'PayPal'),
        ('V', 'Outro'),
    ]

    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    method = models.CharField(max_length=2, choices=METHOD_CHOICES)
    #card
    card_number = models.CharField(max_length=16, blank=True, null=True)
    expiration_date = models.DateField(blank=True, null=True)
    security_code = models.CharField(max_length=4, blank=True, null=True)
    holder_name = models.CharField(max_length=255, blank=True, null=True)
    
    # paypal
    paypal_email = models.EmailField(blank=True, null=True)

    #pix
    pix_key = models.CharField(max_length=50, blank=True, null=True)

    #boleto
    boleto_number = models.CharField(max_length=20, blank=True, null=True)
    boleto_expiration_date = models.DateField(blank=True, null=True)
    boleto_line = models.CharField(max_length=100, blank=True, null=True)

    # Outros campos relevantes para cada método de pagamento
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.get_method_display()} de {self.user.username}"