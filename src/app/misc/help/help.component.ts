import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private syssvc: SystemService) { }

  ngOnInit(): void {
  }

}
