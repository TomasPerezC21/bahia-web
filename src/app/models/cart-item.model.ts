import { Product } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string; // Talla requerida/opcional si el cliente quiere añadirla
}
