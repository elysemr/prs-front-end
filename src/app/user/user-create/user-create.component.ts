import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  pw!: string;
  pw2!: string;

  constructor(private usersvc: UserService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
  }


  save(): void {
    this.usersvc.addUser(this.user).subscribe({
      next: (res: any) => {
        console.log("User created.");
        res as User;
        this.router.navigateByUrl("/user/list");
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  chkPwd(): void {
    this.pw2 = "";
    if(this.user.password !== this.pw) {
      this.pw2 = "Passwords don't match.";
    }
  }

}
