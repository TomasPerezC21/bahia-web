import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, MatBadgeModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private cartService = inject(CartService);
  
  cartCount = this.cartService.totalItems;
  menuOpen = false;

  navLinks = [
    { label: 'Colección', href: '#coleccion' },
    { label: 'Novedades', href: '#novedades' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Nosotros', href: '#nosotros' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
