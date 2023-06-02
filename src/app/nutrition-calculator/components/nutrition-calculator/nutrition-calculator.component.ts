import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-nutrition-calculator',
  templateUrl: './nutrition-calculator.component.html',
  styleUrls: ['./nutrition-calculator.component.scss'],
})
export class NutritionCalculatorComponent {
  products = this.productService.getAll();
  selectedProduct$ = this.productService.getSelectedProduct();
  calculatedProducts$ = this.productService.getCalculatedProducts();

  constructor(private productService: ProductService) {}

  onProductSelect($event: Product) {
    this.productService.setSelectedProduct($event);
  }

  onCalculatedProduct($event: Product) {
    this.productService.addCalculatedProduct($event);
  }

  onRemoveSelected($event: Product) {
    this.productService.removeFromCalculatedProducts($event);
  }
}
