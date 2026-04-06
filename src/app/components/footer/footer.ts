import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  columns = [
    {
      title: 'Tienda',
      links: ['Novedades', 'Bikinis', 'Bañadores', 'Complementos', 'Ofertas'],
    },
    {
      title: 'Ayuda',
      links: ['Guía de tallas', 'Envíos', 'Devoluciones', 'Contacto', 'FAQ'],
    },
    {
      title: 'Síguenos',
      links: ['Instagram', 'TikTok', 'Pinterest', 'Facebook'],
    },
  ];
}
