import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Estado global usando Signals de Angular
  private cartItemsSignal = signal<CartItem[]>([]);

  // Señales expuestas para lectura
  readonly items = this.cartItemsSignal.asReadonly();
  
  readonly totalItems = computed(() => {
    return this.cartItemsSignal().reduce((acc, item) => acc + item.quantity, 0);
  });

  readonly totalPrice = computed(() => {
    return this.cartItemsSignal().reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  });

  addToCart(product: Product, quantity: number = 1, size?: string) {
    this.cartItemsSignal.update(items => {
      // Buscar si el producto ya está en el carrito con la misma talla
      const index = items.findIndex(i => i.product.id === product.id && i.size === size);
      
      if (index > -1) {
        // Aumentar la cantidad si ya existe
        const newItems = [...items];
        newItems[index] = { ...newItems[index], quantity: newItems[index].quantity + quantity };
        return newItems;
      }
      
      // Añadir nuevo item de lo contrario
      return [...items, { product, quantity, size }];
    });
  }

  removeFromCart(productId: number, size?: string) {
    this.cartItemsSignal.update(items => 
      items.filter(i => !(i.product.id === productId && i.size === size))
    );
  }

  updateQuantity(productId: number, quantity: number, size?: string) {
    if (quantity <= 0) {
      this.removeFromCart(productId, size);
      return;
    }
    
    this.cartItemsSignal.update(items => 
      items.map(i => {
        if (i.product.id === productId && i.size === size) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  }
  
  clearCart() {
    this.cartItemsSignal.set([]);
  }
}
