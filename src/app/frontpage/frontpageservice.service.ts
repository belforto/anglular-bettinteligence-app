import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  id: Number;
}

@Injectable({
  providedIn: 'root',
})
export class FrontpageService {
  constructor(private http: HttpClient) {}

  public saveProduct(product: Product): Observable<Product> {
    const url =
      'https://racunalni-webshop-default-rtdb.europe-west1.firebasedatabase.app/products.json';

    return this.http.post<Product>(url, product);
  }
}
