import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  username: string = "";
  password: string = "";
  notify: string = "";

  constructor(private syssvc: SystemService, private usrsvc: UserService, private router: Router) { }

  ngOnInit(): void {
    console.debug("ngOnInit()");
  }
  ngOnDestroy(): void {}

  login(): void {
    this.syssvc.clearUser();
    this.usrsvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug(`${this.username} is logged in.`);
        this.syssvc.setUser(res as User);
     this.router.navigateByUrl("request/review-lines");
     },
     error: (err) => {
       if(err.error.status == 404) {
      this.notify = "Username and/or password are incorrect.";
      return;

       }
       console.debug(err);
     }
   });
  }
}
  
