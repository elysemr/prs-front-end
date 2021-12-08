import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLineService } from 'src/app/requestline/request-line.service';
import { SystemService } from 'src/app/user/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { RequestLineComponent } from '../request-line/request-line.component';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  request!: Request;

  constructor(private syssvc: SystemService, private reqsvc: RequestService, private route: ActivatedRoute, private router: Router, private rlsvc: RequestLineService ) { }

  approve(request: Request): void {
   request.rejectionReason = "";
   this.reqsvc.toApprove(request).subscribe({
     next: (reqsvc) => {
       console.debug("Request approved.");
       this.refresh();
     }
   });
  }
  displayRejection: boolean = false;
  rejectionReason(): void {
    this.displayRejection = !this.displayRejection;
  }
  reject(request:Request): void {
    this.reqsvc.toReject(request).subscribe({
      next: (reqsvc) => {
        console.debug("Request rejected.");
        this.refresh();
      }
    });
  }

  review(request: Request): void {
    this.reqsvc.toReview(request).subscribe({
      next: (res) => {
        console.debug("Request has been reviewed.");
        this.router.navigateByUrl("/request/review-list");
        this.refresh();
      }
    })
  }

  refresh() : void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("Request:", res as Request);
        this.request = res as Request;
      }
    })
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.refresh();
  }

}