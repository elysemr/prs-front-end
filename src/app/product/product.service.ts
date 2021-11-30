import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = "http://localhost:1215/api/products"

  constructor(
    private httpsvc: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Product[]>;
  }
  
  getByPk(id: number): Observable<Product> {
    
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }
  
  addProduct(product: Product): Observable<any> {
    return this.httpsvc.post(`${this.baseurl}`, product) as Observable<Product>;
  }
  
  editProduct(product: Product): Observable<any> {
    return this.httpsvc.put(`${this.baseurl}/${product.id}`, product) as Observable<Product>;
  } 
  
  deleteProduct(id: number): Observable<any> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Product>;
  }

}
