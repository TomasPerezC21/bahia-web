export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  emoji: string;
  bg: string;
  badge: string | null;
  badgeType: string | null;
  isNew: boolean;
}
