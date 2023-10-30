import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  products = new MatTableDataSource<Product>();
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.products.data = this.productService.read();
      this.products.paginator = this.paginator;
    }, 0);
  }
}