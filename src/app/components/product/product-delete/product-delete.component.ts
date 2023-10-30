import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productId: number = 0;
  product: Product | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; 
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(productId: number): void {
    const loadedProduct = this.productService.readById(productId);
    if (loadedProduct !== null) {
      this.product = loadedProduct;
    } else { 
      console.error('Produto não encontrado!')
    }
  }

  deleteProduct(): void {
    if (this.product) {
      this.productService.delete(this.productId);
      this.router.navigate(['/products']);
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

// loadProductsDetails(productId: number): void {
//   const loadedProduct = this.productService.readById(productId);
//   if (loadedProduct !== null) {
//     this.product = loadedProduct;
//   } else {
//     console.error('Produto não encontrado');
//   }
// }