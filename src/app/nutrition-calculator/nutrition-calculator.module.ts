import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { NutritionCalculatorRoutingModule } from './nutrition-calculator-routing.module';
import { NutritionCalculatorComponent } from './components/nutrition-calculator/nutrition-calculator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCalculatorComponent } from './components/product-calculator/product-calculator.component';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { TotalNutritionComponent } from './components/total-nutrition/total-nutrition.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    NutritionCalculatorComponent,
    ProductListComponent,
    ProductCalculatorComponent,
    SelectedProductsComponent,
    TotalNutritionComponent,
  ],
  imports: [
    CommonModule,
    NutritionCalculatorRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule.forChild(),
    MatTableModule,
    MatSortModule,
  ],
})
export class NutritionCalculatorModule {}
