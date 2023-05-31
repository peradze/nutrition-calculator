import { Component } from '@angular/core';
import { PRODUCTS } from './utils/data';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = PRODUCTS;
  selectedProduct: Product | null = null;
  selectedProducts: Product[] = [];

  onProductSelect($event: Product) {
    this.selectedProduct = $event;
  }

  onCalculatedProduct($event: Product) {
    this.selectedProducts = [...this.selectedProducts, $event];
  }

  onRemoveSelected($event: Product) {
    this.selectedProducts = this.selectedProducts.filter((product) => product !== $event);
  }
}
