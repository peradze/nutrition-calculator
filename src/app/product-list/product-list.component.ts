import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @Input() products: Product[] = [];
  @Output() productSelect = new EventEmitter<Product>();
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  displayedColumns: string[] = ['product', 'calorie', 'protein', 'carbs', 'fat'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  selectedProduct: Product | undefined;

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Product>(this.products);
    console.log(this.translateService.currentLang);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(product: Product) {
    this.selectedProduct = product;
    this.productSelect.emit(product);
  }
}
