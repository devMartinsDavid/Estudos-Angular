import { Product } from '../shared/models/product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importe o MatSnackBar

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private currentId = 0;
  productsDb: Product[] = [
    {id: 1, name: 'teste', price: 9.99},
    {id: 2, name: 'teste', price: 9.99},
    {id: 3, name: 'teste', price: 9.99},
    {id: 4, name: 'teste', price: 9.99},
    {id: 5, name: 'teste', price: 9.99},
    {id: 6, name: 'teste', price: 9.99},
    {id: 7, name: 'teste', price: 9.99},
    {id: 8, name: 'teste', price: 9.99},
    {id: 9, name: 'teste', price: 9.99},
    {id: 10, name: 'teste', price: 9.99},
    {id: 11, name: 'teste', price: 9.99},
    {id: 12, name: 'teste', price: 9.99},
    {id: 13, name: 'teste', price: 9.99},
    {id: 14, name: 'teste', price: 9.99},
    {id: 15, name: 'teste', price: 9.99},
    {id: 16, name: 'teste', price: 9.99},
    {id: 17, name: 'teste', price: 9.99},
    {id: 18, name: 'teste', price: 9.99},
    {id: 19, name: 'teste', price: 9.99},
    {id: 20, name: 'teste', price: 9.99},
  ];

  constructor(private snackBar: MatSnackBar) {
    this.initializeCurrentId();
  }

  private getNextId(): number {
    const maxId = Math.max(...this.productsDb.map(product => product.id));
    return maxId + 1;
  }

  private initializeCurrentId(): void {
    const maxId = Math.max(...this.productsDb.map(product => product.id));
    this.currentId = maxId + 1;
  }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      verticalPosition: 'top' // Definir a posição como 'top' para exibir na parte superior
    });
  }

  create(product: Product): boolean {
    try {
      product.id = this.getNextId();
      this.productsDb.push(product);
      this.showMenssage('Produto criado com sucesso');
      return true; // Retorna verdadeiro se a criação foi bem-sucedida
    } catch (error) {
      this.handleError(error);
      return false; // Retorna falso se ocorreu algum erro
    }
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
