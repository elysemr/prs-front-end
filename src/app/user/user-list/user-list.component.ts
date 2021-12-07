import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { identifierModuleUrl } from '@angular/compiler';
import { SystemService } from '../system.service';

 @Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 

  users: User[] = [];
  user!: User;
  searchCriteria: string = "";
  confirmDelete: boolean = false;


  constructor(
    private usrsvc: UserService, private router: Router, private syssvc: SystemService
  ) {}

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => {
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
            cancelButtonText: "Back to Users",
          }).then((res) =>  {
            if(res.isConfirmed) {
              this.confirm();
            } else if (res.isDismissed) {
              this.router.navigateByUrl("/user/list");
            }
          })
        }
      }
      confirm(): void {
        this.usrsvc.deleteUser(this.user.id).subscribe({
          next: (res: any) => {
            console.debug(res, "User deleted.");
            
          }
        })
      }
  }
