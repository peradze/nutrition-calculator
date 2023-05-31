import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCalculatorComponent } from './product-calculator/product-calculator.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { MatIconModule } from '@angular/material/icon';
import { TotalNutritionComponent } from './total-nutrition/total-nutrition.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductCalculatorComponent, SelectedProductsComponent, TotalNutritionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
