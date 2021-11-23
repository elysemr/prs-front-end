import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost1215/api/users";
  userId: number = User.id;


  constructor(
    private httpsvc: HttpClient
  ) { }

    list(): Observable<User[]> {
      return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>;
    }

    getByPk(): Observable<User[]> {

      return this.httpsvc.get(`${this.baseurl}/${User.id}`) as Observable<User[]>;
    }

    addUser(): 



}
