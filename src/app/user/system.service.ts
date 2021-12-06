import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = null;
  noUser: User = new User();

  constructor(private router: Router, private syssvc: SystemService) { }

checkLogin(): void {
  if(this.loggedInUser === null)
  this.router.navigateByUrl("/user/login");
}

setUser(user: User): void {
  this.loggedInUser = user;
}

clearUser(): void {
  this.setUser(this.noUser);
}

}

