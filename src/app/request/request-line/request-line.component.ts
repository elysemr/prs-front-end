import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLineService } from 'src/app/requestline/request-line.service';
import { SystemService } from 'src/app/user/system.service';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent implements OnInit {
  
  request!: Request;
  user!: User;
 

  constructor(private syssvc: SystemService, private reqsvc: RequestService, private rlsvc: RequestLineService, private route: ActivatedRoute, private router: Router, usersvc: UserService) { }
  
  editRl(id: number): void {
    this.router.navigateByUrl(`/requestline/edit${id}`);
  }

    deleteRl(id: number): void {
    this.rlsvc.deleteRequestline(id).subscribe({
      next: (res) => {
        console.debug(res, "Requestline deleted.");
        this.refresh();
        this.router.navigateByUrl(`/request/line/${this.request.id}`)
      }
    })
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res as Request;
        this.request.user !== undefined ? this.request.user.username : null;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  review(request: Request): void {
    this.reqsvc.toReview(request).subscribe({
      next: (res) => {
        console.debug("Request set to review.");
        this.refresh();
      }
    })
  }


  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.refresh();
  }

}