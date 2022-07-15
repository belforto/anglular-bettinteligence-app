import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frontpage } from './frontpage.model';


@Injectable({
  providedIn: 'root',
})
export class FrontpageService {
  constructor(private http: HttpClient) {}

  public saveProduct(product: Frontpage): Observable<Frontpage> {
    const url =
      'https://racunalni-webshop-default-rtdb.europe-west1.firebasedatabase.app/products.json';

    return this.http.post<Frontpage>(url, product);
  }

  public getProducts(): Observable<Frontpage[]> {
    const url =
      'https://racunalni-webshop-default-rtdb.europe-west1.firebasedatabase.app/products.json';

    return this.http.get<Frontpage[]>(url);
  }
}
