import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.class';

const noUser = new User();

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = null;
  loginRequired!: boolean; 

  constructor(private router: Router) { }

  setUser(user: User): void {
    this.loggedInUser = user;
   }

   clearUser(): void {
    this.setUser(noUser);
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }

checkLogin() {
  if(!this.loginRequired ) {
    console.warn("Turn on forced login.");
    return;
  }
  if(this.getLoggedInUser() === noUser) {
  this.router.navigateByUrl("/user/login");
}

}

}

