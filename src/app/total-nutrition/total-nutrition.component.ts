import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-total-nutrition',
  templateUrl: './total-nutrition.component.html',
  styleUrls: ['./total-nutrition.component.scss'],
})
export class TotalNutritionComponent implements OnChanges {
  @Input() selectedProducts: Product[] = [];
  totalCalorie = 0;
  totalProtein = 0;
  totalCarbs = 0;
  totalFat = 0;
  totalGram = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotals();
  }

  private calculateTotals() {
    this.totalCalorie = 0;
    this.totalProtein = 0;
    this.totalCarbs = 0;
    this.totalFat = 0;
    this.totalGram = 0;
    this.selectedProducts.forEach((product) => {
      this.totalCalorie += product.calorie ? product.calorie : 0;
      this.totalProtein += product.protein ? product.protein : 0;
      this.totalCarbs += product.carbs ? product.carbs : 0;
      this.totalFat += product.fat ? product.fat : 0;
      this.totalGram += product.gram ? product.gram : 0;
    });
  }
}
