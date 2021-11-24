import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://elyserot.w33.wh-2.com/api/users";


  constructor(
    private httpsvc: HttpClient
  ) { }

    list(): Observable<User[]> {
      return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>;
    }

    getByPk(id: number): Observable<User> {

      return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<User>;
    }

    addUser(user: User): Observable<User> {
      return this.httpsvc.post(`${this.baseurl}/${user}`, user) as Observable<User>;
    }

    editUser(user: User): Observable<User> {
      return this.httpsvc.put(`${this.baseurl}/${user}`, user) as Observable<User>;
    } 

    deleteUser(id: number): Observable<User> {
      return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<User>;
    }

    //login()



}
