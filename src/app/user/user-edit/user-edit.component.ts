import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SystemService } from '../system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: any;
  user!: User;
  pw!: string;
  pw2!: string;
  confirmDelete: boolean = false;
  
  constructor(private route: ActivatedRoute, private usersvc: UserService, private router: Router, private syssvc: SystemService) { }
  
  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usersvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res as User;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  chkPwd(): void {
    this.pw2 = "";
    if(this.user.password !== this.pw) {
      this.pw2 = "Passwords don't match.";
    }
  }
  
  
  save(): void {
    console.log(this.user);
    this.usersvc.editUser(this.user).subscribe({
      next: (res: any) => {
        console.log(res, "Changes saved.");
        res as User;
        this.router.navigateByUrl("/user/list");
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  delete(): void {
    if(this.confirmDelete = !this.confirmDelete)
    {
      Swal.fire({
        title: "Permanently Delete?",
        text: "Selecting 'Delete' will delete this user forever.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
        cancelButtonText: "Back to User Detail",
      }).then((res) =>  {
        if(res.isConfirmed) {
          this.confirm();
        } else if (res.isDismissed) {
          this.router.navigateByUrl("/user/detail/{{user.id}}");
        }
      })
    }
  }
  confirm(): void {
    this.usersvc.deleteUser(this.user.id).subscribe({
      next: (res: any) => {
        console.debug(res, "User deleted.");
        this.router.navigateByUrl("/user/list");
        
      }
    })
  }



}
