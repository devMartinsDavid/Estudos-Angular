import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productId!: number;
  product: Product = { id: 0, name: '', price: 0 }; // Inicializa o produto

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.loadProductsDetails(this.productId);
    });
  }

  loadProductsDetails(productId: number): void {
    this.product = this.productService.readById(productId);
    if (!this.product.id) {
      console.error('O produto não foi carregado corretamente!');
      // Implemente alguma lógica de tratamento para produto não encontrado
    }
  }

  updateProduct(): void {
    if (this.product.id !== 0) {
      this.productService.update(this.product);
      this.productService.showMenssage('Produto Alterado com sucesso!');
      this.router.navigate(['/products']);
    } else {
      console.error('O produto não foi carregado corretamente!');
      // Implemente alguma lógica de tratamento para produto não encontrado
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
