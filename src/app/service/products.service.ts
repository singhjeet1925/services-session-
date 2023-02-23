import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  public getProducts() {
    let products: Product[];

    products = [
      {
        productID: 1,
        name: 'Memory Card',
        price: 1100,
        productQuantity:10
      },
      {
        productID: 1,
        name: 'Pen Drive',
        price: 200,
        productQuantity:1
      },

      {
        productID: 1,
        name: 'Power Bank',
        price: 1020,
        productQuantity:11
      },

      {
        productID: 1,
        name: 'charger',
        price: 500,
        productQuantity:14
      },
      {
        productID: 1,
        name: 'headphones',
        price: 445,
        productQuantity:1
      },
      {
        productID: 1,
        name: 'hardDisk',
        price: 700,
        productQuantity:14
      },

    ];

    return products;
  }
}
