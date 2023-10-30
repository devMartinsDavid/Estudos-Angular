import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDbService {
  // productsDb: Product[] = [
  //   { id: 1, name: 'produto 1', price: 100 },
  //   { id: 2, name: 'produto 2', price: 200 },
  //   { id: 3, name: 'produto 3', price: 300 },// Adicione outros produtos conforme necessário
  //   { id: 4, name: 'produto 4', price: 300 },
  //   { id: 5, name: 'produto 5', price: 300 },
  //   { id: 6, name: 'produto 6', price: 300 },
  //   { id: 7, name: 'produto 7', price: 300 }
  // ];
  
  constructor() { }
}
