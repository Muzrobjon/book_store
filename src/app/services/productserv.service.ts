import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ProductItem } from '../productlist/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductservService {

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>('http://localhost:3000/products');
  }
  
  public addProduct(prod) {
    return this.http.post('http://localhost:3000/products', prod).pipe(
      shareReplay()
    );
  }

  public removeProduct(prod) {
    return this.http.delete('http://localhost:3000/products/'+ prod._id);
  }

  public selectedProduct = [];

  getProductList() {
    return this.getProducts()
    ;
  }

}
