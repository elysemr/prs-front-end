import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.css']
})
export class E404Component implements OnInit {

  constructor(private syssvc: SystemService) { }

  ngOnInit(): void {
  }

}
