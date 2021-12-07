import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import Swal from 'sweetalert2';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  id: any;
  request!: Request;
  users!: User[];
  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private reqsvc: RequestService, private router: Router, private usrsvc: UserService, private syssvc: SystemService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res as Request;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

    save(): void {
      console.log(this.request);
      this.reqsvc.editRequest(this.request).subscribe({
        next: (res: any) => {
          console.log(res, "Changes saved.");
          res as Request;
          this.router.navigateByUrl("/request/list");
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
          text: "Selecting 'Delete' will delete this request forever.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Delete",
          confirmButtonColor: "red",
          cancelButtonText: "Back to Request",
        }).then((res) =>  {
          if(res.isConfirmed) {
            this.confirm();
          } else if (res.isDismissed) {
            this.router.navigateByUrl("/request/detail/{{request.id}}");
          }
        })
      }
    }
    confirm(): void {
      this.reqsvc.deleteRequest(this.request.id).subscribe({
        next: (res: any) => {
          console.debug(res, "Request deleted.");
          this.router.navigateByUrl("/request/list");
          
        }
      })
    }

}
