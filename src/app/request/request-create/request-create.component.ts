import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();


  constructor(private reqsvc: RequestService, private router: Router) { }

  save(): void {
    this.reqsvc.addRequest(this.request).subscribe({
      next: (res) => {
        console.log("Request created.");
        this.router.navigateByUrl(`/requests/lines/${res.id}`);
      },
      error: (err) => {
        console.error(err);
      }
     });
  }

  ngOnInit(): void {
    // this.sys.chkLoggedIn();
    // this.request.userId = this.sys.getLoggedInUser().id;
    // this.request.userUsername = this.sys.getLoggedInUser().username;
  }



}
