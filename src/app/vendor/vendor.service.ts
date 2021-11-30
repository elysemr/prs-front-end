import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = "http://localhost:1215/api/vendors"

  constructor(
    private httpsvc: HttpClient
  ) { }
  
  list(): Observable<Vendor[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  
  getByPk(id: number): Observable<Vendor> {
    
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
  
  addVendor(vendor: Vendor): Observable<any> {
    return this.httpsvc.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  
  editVendor(vendor: Vendor): Observable<any> {
    return this.httpsvc.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<Vendor>;
  } 
  
  deleteVendor(id: number): Observable<any> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }

}