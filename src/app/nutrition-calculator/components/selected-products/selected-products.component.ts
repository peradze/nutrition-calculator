import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent implements OnChanges {
  @Input() calculatedProducts: Product[] = [];
  @Output() removeSelected = new EventEmitter<Product>();
  displayedColumns: string[] = ['product', 'gram', 'calorie', 'protein', 'carbs', 'fat', 'remove'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  constructor(public translateService: TranslateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Product>(this.calculatedProducts);
  }

  removeProduct(element: Product) {
    this.removeSelected.emit(element);
  }
}
