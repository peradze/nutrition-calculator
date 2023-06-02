import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../utils/data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProductSubj$: BehaviorSubject<Product | null> = new BehaviorSubject<Product | null>(null);
  private selectedProduct$ = this.selectedProductSubj$.asObservable();
  private calculatedProductsSubj$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private calculatedProduct$ = this.calculatedProductsSubj$.asObservable();

  constructor() {}

  getSelectedProduct() {
    return this.selectedProduct$;
  }

  setSelectedProduct(product: Product) {
    this.selectedProductSubj$.next(product);
  }

  getCalculatedProducts() {
    return this.calculatedProduct$;
  }

  addCalculatedProduct(product: Product) {
    this.calculatedProductsSubj$.next([...this.calculatedProductsSubj$.value, product]);
  }

  removeFromCalculatedProducts(product: Product) {
    this.calculatedProductsSubj$.next(this.calculatedProductsSubj$.getValue().filter((p) => p !== product));
  }

  getAll(): Product[] {
    return PRODUCTS;
  }
}
