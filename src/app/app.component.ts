import { Component } from '@angular/core';
import { PRODUCTS } from './utils/data';
import { Product } from './model/product';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = PRODUCTS;
  selectedProduct: Product | null = null;
  selectedProducts: Product[] = [];
  languages: string[] = ['EN', 'KA'];
  selectedLang = 'KA';

  constructor(private translateService: TranslateService) {
    let lang = sessionStorage.getItem('appLang');
    if (lang != null) {
      this.selectedLang = lang;
      this.updateLang();
    }
  }

  onProductSelect($event: Product) {
    this.selectedProduct = $event;
  }

  onCalculatedProduct($event: Product) {
    this.selectedProducts = [...this.selectedProducts, $event];
  }

  onRemoveSelected($event: Product) {
    this.selectedProducts = this.selectedProducts.filter((product) => product !== $event);
  }

  changeLanguage(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang.toLowerCase());
    this.updateLang();
  }

  updateLang() {
    sessionStorage.setItem('appLang', this.selectedLang);
    document.documentElement.lang = this.selectedLang.toLowerCase();
    this.translateService.use(this.selectedLang.toLowerCase()).subscribe();
  }
}
