import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-categories',
  imports: [MatButtonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class CategoriesComponent {
  categories = [
    { name: 'Bikinis', count: 48, tag: 'Más popular', emoji: '👙', bg: '#E8E0D5' },
    { name: 'Bañadores', count: 24, tag: null, emoji: '🩱', bg: '#DDD6CD' },
    { name: 'Complementos', count: 36, tag: 'Nuevo', emoji: '🕶️', bg: '#D5CEC6' },
    { name: 'Ofertas', count: 15, tag: 'Hasta -40%', emoji: '🏷️', bg: '#CBC3B9' },
  ];
}
