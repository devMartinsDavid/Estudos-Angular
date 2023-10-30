import { Product } from '../shared/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private currentId = 0;
  private getNextId(): number {
    const maxId = Math.max(...this.productsDb.map(product => product.id));
    return maxId + 1;
  }
  productsDb: Product[] = [
    { id: 1, name: 'produto 1', price: 100 },
    { id: 2, name: 'produto 2', price: 200 },
    { id: 3, name: 'produto 3', price: 300 },// Adicione outros produtos conforme necessário
    { id: 4, name: 'produto 4', price: 300 },
    { id: 5, name: 'produto 5', price: 300 },
    { id: 6, name: 'produto 6', price: 300 },
    { id: 7, name: 'produto 7', price: 300 }
  ];

  constructor() {
    this.initializeCurrentId();
  }

  private initializeCurrentId(): void {
    const maxId = Math.max(...this.productsDb.map(product => product.id));
    this.currentId = maxId + 1;
  }

  showMenssage(msg: string, isError: boolean = false): void {
    // Implementação do snackBar
  }

  create(product: Product): void {
    product.id = this.getNextId(); // Definindo o ID para o novo produto
    this.productsDb.push(product);
    this.showMenssage('Produto criado com sucesso');
  }

  read(): Product[] {
    return this.productsDb;
  }

  readById(id: number): Product {
    const foundProduct = this.productsDb.find(product => product.id === id);
    if (foundProduct) {
      return foundProduct;
    } else {
      // Lidar com o erro retornando um produto vazio ou outro tratamento adequado
      return { id: 0, name: '', price: 0 };
    }
  }
  update(product: Product): void {
    const existingProduct = this.productsDb.find(p => p.id === product.id);
    if (existingProduct) {
      const index = this.productsDb.indexOf(existingProduct);
      this.productsDb[index] = product;
      this.showMenssage('Produto atualizado com sucesso');
    } else {
      // Produto não encontrado
      throw new Error('Produto não encontrado');
    }
  }

  delete(id: number): void {
    const index = this.productsDb.findIndex(p => p.id === id);
    if (index >= 0) {
      this.productsDb.splice(index, 1);
      this.showMenssage('Produto excluído com sucesso');
    } else {
      throw new Error('Produto não encontrado');
    }
  }

  handleError(e: any): void {
    this.showMenssage('Ocorreu um erro!', true);
  }
}
