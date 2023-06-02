import { Component } from '@angular/core';
import { Product } from './model/product';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from './services/product.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = this.productService.getAll();
  selectedProduct$ = this.productService.getSelectedProduct();
  calculatedProducts$ = this.productService.getCalculatedProducts();

  languages: string[] = this.languageService.getLanguageOptions();

  constructor(
    private translateService: TranslateService,
    private productService: ProductService,
    private languageService: LanguageService,
  ) {}

  onProductSelect($event: Product) {
    this.productService.setSelectedProduct($event);
  }

  onCalculatedProduct($event: Product) {
    this.productService.addCalculatedProduct($event);
  }

  onRemoveSelected($event: Product) {
    this.productService.removeFromCalculatedProducts($event);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang.toLowerCase());
    this.languageService.updateLang(lang);
  }
}
