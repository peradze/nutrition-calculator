import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-calculator',
  templateUrl: './product-calculator.component.html',
  styleUrls: ['./product-calculator.component.scss'],
})
export class ProductCalculatorComponent implements OnInit, OnChanges {
  @Input() product: Product | null = null;
  @Output() calculatedProduct = new EventEmitter<Product>();
  productForm = new FormGroup({
    gram: new FormControl({ value: null, disabled: true }, Validators.required),
    calorie: new FormControl({ value: 0, disabled: true }),
    protein: new FormControl({ value: 0, disabled: true }),
    carbs: new FormControl({ value: 0, disabled: true }),
    fat: new FormControl({ value: 0, disabled: true }),
  });

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.productForm.get('gram')?.valueChanges.subscribe((value) => {
      this.productForm.patchValue({
        // @ts-ignore
        calorie: Math.round((value / 100) * this.product?.calorie * 100) / 100,
        // @ts-ignore
        protein: Math.round((value / 100) * this.product?.protein * 100) / 100,
        // @ts-ignore
        carbs: Math.round((value / 100) * this.product?.carbs * 100) / 100,
        // @ts-ignore
        fat: Math.round((value / 100) * this.product?.fat * 100) / 100,
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product != null) {
      this.productForm.get('gram')?.enable();
      // this.productForm.get('gram')?.setValidators([Validators.required]);
      this.productForm.setValue({
        // @ts-ignore
        gram: 100,
        calorie: this.product.calorie ? this.product.calorie : 0,
        protein: this.product.protein ? this.product.protein : 0,
        carbs: this.product.carbs ? this.product.carbs : 0,
        fat: this.product.fat ? this.product.fat : 0,
      });
    }
  }

  selectProduct() {
    this.calculatedProduct.emit({
      ...this.productForm.getRawValue(),
      // @ts-ignore
      product: this.product?.product,
      // @ts-ignore
      productGE: this.product?.productGE,
    });
  }
}
