import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-lines',
  templateUrl: './request-review-lines.component.html',
  styleUrls: ['./request-review-lines.component.css']
})
export class RequestReviewLinesComponent implements OnInit {
  
  searchCriteria: string = "";
  requests: Request[] = [];

  constructor(private syssvc: SystemService, private router: Router, private reqsvc: RequestService) { }

    approve(request: Request): void {
      this.reqsvc.toApprove(request).subscribe({
        next: (res) => {
          console.debug("Request approved.", res);
          this.router.navigateByUrl("/request/review-lines");
        }
      });
     }

     reject(request:Request): void {
       this.reqsvc.toReject(request).subscribe({
         next: (res) => {
           console.debug("Request rejected.", res);
           this.router.navigateByUrl("/request/review-lines");
         }
       });
     }
  
   
     refresh() : void {
       let userId = this.syssvc.getLoggedInUser().id;
       this.reqsvc.reviews(userId).subscribe({
         next: (res) => {
           console.debug("Requests in review", res);
           this.requests = res as Request[];
         }
       })
     }
   
     ngOnInit(): void {
       this.syssvc.checkLogin();
       this.refresh();
     }
   
   }
