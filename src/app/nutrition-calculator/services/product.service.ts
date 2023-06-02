import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../utils/data';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProductSubj$: BehaviorSubject<Product | null>;
  private readonly selectedProduct$: Observable<Product | null>;

  private calculatedProductsSubj$: BehaviorSubject<Product[]>;
  private readonly calculatedProduct$: Observable<Product[]>;

  constructor() {
    let selectedProductCache = localStorage.getItem('selectedProduct');
    if (selectedProductCache) {
      this.selectedProductSubj$ = new BehaviorSubject<Product | null>(JSON.parse(selectedProductCache));
    } else {
      this.selectedProductSubj$ = new BehaviorSubject<Product | null>(null);
    }
    this.selectedProduct$ = this.selectedProductSubj$.asObservable();

    let calculatedProductsCache = localStorage.getItem('calculatedProducts');
    if (calculatedProductsCache) {
      this.calculatedProductsSubj$ = new BehaviorSubject<Product[]>(JSON.parse(calculatedProductsCache));
    } else {
      this.calculatedProductsSubj$ = new BehaviorSubject<Product[]>([]);
    }
    this.calculatedProduct$ = this.calculatedProductsSubj$.asObservable().pipe(distinctUntilChanged());
  }

  getSelectedProduct() {
    return this.selectedProduct$;
  }

  setSelectedProduct(product: Product) {
    this.selectedProductSubj$.next(product);
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  }

  getCalculatedProducts() {
    return this.calculatedProduct$;
  }

  addCalculatedProduct(product: Product) {
    let nextValue = [...this.calculatedProductsSubj$.value, product];
    this.calculatedProductsSubj$.next(nextValue);
    localStorage.setItem('calculatedProducts', JSON.stringify(nextValue));
  }

  removeFromCalculatedProducts(product: Product) {
    let afterRemoved = this.calculatedProductsSubj$.getValue().filter((p) => p !== product);
    this.calculatedProductsSubj$.next(afterRemoved);
    localStorage.setItem('calculatedProducts', JSON.stringify(afterRemoved));
  }

  getAll(): Product[] {
    return PRODUCTS;
  }
}
