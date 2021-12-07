import { Component, Input, OnInit } from '@angular/core';
import { SystemService } from 'src/app/user/system.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input()
  menu!: Menu;

  constructor( private syssvc: SystemService) { }

  ngOnInit(): void {
  }

}
