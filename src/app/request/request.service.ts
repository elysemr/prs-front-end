import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = "http://localhost:1215/api/requests"

  constructor(
    private httpsvc: HttpClient
  ) { }

list(): Observable<Request[]> {
  return this.httpsvc.get(`${this.baseurl}`) as Observable<Request[]>;
}

reviews(userId: number): Observable<Request[]> {
  return this.httpsvc.get(`${this.baseurl}/reviews/${userId}`) as Observable<Request[]>
}

getByPk(id: number): Observable<Request> {
  return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Request>;
}

addRequest(request: Request): Observable<any> {
  return this.httpsvc.post(`${this.baseurl}`, request) as Observable<any>;
}

editRequest(request: Request): Observable<any> {
  return this.httpsvc.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
}

deleteRequest(id: number): Observable<any> {
  return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Request>;
}

toReview(request: Request): Observable<any> {
  return this.httpsvc.put(`${this.baseurl}/review`, request) as Observable<any>;
}

toApprove(request: Request): Observable<any> {
  return this.httpsvc.put(`${this.baseurl}/approve`, request) as Observable<any>; 
}

toReject(request: Request): Observable<any> {
  return this.httpsvc.put(`${this.baseurl}/reject`, request) as Observable<any>;
}

}
