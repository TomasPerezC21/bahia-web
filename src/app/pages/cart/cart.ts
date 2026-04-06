import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  cartService = inject(CartService);
  http = inject(HttpClient);

  customerName = '';
  customerEmail = '';
  customerAddress = '';
  customerPhone = '';
  notes = '';

  isSubmitting = false;
  orderCompleted = false;

  increaseQuantity(productId: number, currentQuantity: number, size?: string) {
    this.cartService.updateQuantity(productId, currentQuantity + 1, size);
  }

  decreaseQuantity(productId: number, currentQuantity: number, size?: string) {
    this.cartService.updateQuantity(productId, currentQuantity - 1, size);
  }

  removeItem(productId: number, size?: string) {
    this.cartService.removeFromCart(productId, size);
  }

  sendOrder() {
    if (!this.customerName || !this.customerEmail || !this.customerAddress) {
      alert('Por favor, rellena tu Nombre, Email y Dirección antes de pedir.');
      return;
    }

    // Evitar múltiples envíos
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Preparar el cuerpo (casi igual, pero sin encodeURIComponent)
    const items = this.cartService.items();
    let body = `¡Hola Bahia Miranda!\n\nSe ha realizado el siguiente pedido:\n\n---\n`;
    
    items.forEach(item => {
      body += `- ${item.quantity}x ${item.product.name}`;
      if (item.size && item.size !== 'Única') body += ` (Talla: ${item.size})`;
      body += ` - ${(item.product.price * item.quantity).toFixed(2)}€\n`;
    });

    body += `\nTOTAL A PAGAR: ${this.cartService.totalPrice().toFixed(2)}€\n`;
    body += `---\n\n`;
    body += `Datos de envío del cliente:\n`;
    body += `Nombre: ${this.customerName}\n`;
    body += `Email: ${this.customerEmail}\n`;
    if (this.customerPhone) body += `Teléfono: ${this.customerPhone}\n`;
    body += `Dirección completa: ${this.customerAddress}\n`;
    
    if (this.notes) {
      body += `\nNotas adicionales:\n${this.notes}\n`;
    }

    const payload = {
      access_key: '35c484c1-933e-4379-bda1-e8be5de8e3da',
      subject: `Nuevo Pedido Bahía: ${this.customerName}`,
      from_name: this.customerName,
      email: this.customerEmail,
      message: body
    };

    // Enviar a Web3Forms
    this.http.post('https://api.web3forms.com/submit', payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.orderCompleted = true;
        this.cartService.clearCart();
      },
      error: (err: any) => {
        this.isSubmitting = false;
        console.error('Error enviando correo:', err);
        alert('Hubo un problema enviando el pedido. Por favor, reintenta más tarde.');
      }
    });
  }
}
