import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  request!: Request;
  searchCriteria: string = "";
  confirmDelete: boolean = false;
  statusStyles: any = {
    NEW: "bold",
    EDIT: "text-primary bold",
    REVIEW: "text-warning bold",
    APPROVED: "text-success bold",
    REJECTED: "text-danger bold"
  };


  constructor(
    private reqsvc: RequestService, private router: Router, private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests", res);
        this.requests = res as Request[];
        for(let r of this.requests){
        r.statusStyle = this.statusStyles[r.status]; }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }



}
