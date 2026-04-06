import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';



@Component({
  selector: 'app-featured-products',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss',
})
export class FeaturedProductsComponent {
  private cartService = inject(CartService);
  
  stars = [1, 2, 3, 4, 5];

  products: Product[] = [
    {
      id: 1,
      name: 'Brisa Marina',
      category: 'Bikini',
      price: 49.95,
      originalPrice: null,
      rating: 5,
      reviews: 128,
      emoji: '🌸',
      bg: '#EDE0D5',
      badge: 'Nuevo',
      badgeType: 'new',
      isNew: true,
    },
    {
      id: 2,
      name: 'Laguna Suave',
      category: 'Bañador',
      price: 39.95,
      originalPrice: 54.95,
      rating: 4,
      reviews: 87,
      emoji: '🐚',
      bg: '#D9D2CA',
      badge: '-27%',
      badgeType: 'sale',
      isNew: false,
    },
    {
      id: 3,
      name: 'Arena & Sal',
      category: 'Bikini',
      price: 54.95,
      originalPrice: null,
      rating: 5,
      reviews: 203,
      emoji: '⭐',
      bg: '#E4DDD6',
      badge: 'Top ventas',
      badgeType: 'top',
      isNew: false,
    },
    {
      id: 4,
      name: 'Atardecer Rosa',
      category: 'Bikini',
      price: 44.95,
      originalPrice: null,
      rating: 4,
      reviews: 64,
      emoji: '🦩',
      bg: '#E8DDD8',
      badge: null,
      badgeType: null,
      isNew: false,
    },
  ];

  addToCart(product: Product) {
    // Si no tienen talla explícita por ahora usamos ÚNICA en featured products
    this.cartService.addToCart(product, 1, 'Única');
    alert(`¡${product.name} añadido al carrito!`);
  }
}
