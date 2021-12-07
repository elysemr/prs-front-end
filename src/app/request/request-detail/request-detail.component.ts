import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import Swal from 'sweetalert2';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  id: any;
request!: Request;

confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private reqsvc: RequestService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.reqsvc.getByPk(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.request = res;
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
        cancelButtonText: "Back to Request Detail",
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
