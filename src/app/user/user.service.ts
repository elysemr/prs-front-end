import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:1215/api/users";


  constructor(
    private httpsvc: HttpClient
  ) { }

    list(): Observable<User[]> {
      return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>;
    }

    getByPk(id: number): Observable<User> {

      return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<User>;
    }

    addUser(user: User): Observable<any> {
      return this.httpsvc.post(`${this.baseurl}`, user) as Observable<User>;
    }

    editUser(user: User): Observable<any> {
      return this.httpsvc.put(`${this.baseurl}/${user.id}`, user) as Observable<User>;
    } 

    deleteUser(id: number): Observable<any> {
      return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<User>;
    }

    login(username: string, password: string): Observable<User> {
      return this.httpsvc.get(`${this.baseurl}/${username}/${password}`) as Observable<User>;
    }



}
