import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { CategoriesComponent } from '../../components/categories/categories';
import { FeaturedProductsComponent } from '../../components/featured-products/featured-products';
import { PromoBannerComponent } from '../../components/promo-banner/promo-banner';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    PromoBannerComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent { }
