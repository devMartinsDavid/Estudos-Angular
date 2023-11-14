import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = { id: 0, name: '', price: 0 };
  constructor(private productService: ProductService, private router: Router) { }

  createProduct(): void {

    if (this.product.name && this.product.price) {

      if (this.productService.create(this.product)) {
        this.productService.showMenssage('Produto criado com Sucesso!');
        this.router.navigate(['/products']);
      } else {console.error('Erro ao criar o produto');}

    } else {alert('Os campos nome e preço são obrigatórios');}
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
