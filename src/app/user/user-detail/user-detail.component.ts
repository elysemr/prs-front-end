import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SystemService } from '../system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;
  user!: User;

  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private usersvc: UserService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.usersvc.getByPk(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
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
