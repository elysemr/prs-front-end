import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/user/system.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  get name() {
    return this.sysvc.getLoggedInUser()?.username
  }

  menus: Menu[] = [
    new Menu("Home", "/home"), 
    new Menu("Users", "/user/list"), 
    new Menu("Vendors", "/vendor/list"), 
    new Menu("Products", "/product/list"), 
    new Menu("Requests", "/request/list"), 
    new Menu("Reviews", "/request/review-lines"), 
    new Menu("About", "/about"), 
    new Menu("Help", "/help"),
    new Menu("Log In", "/user/login") 
  ]

  constructor(private sysvc: SystemService) { }

  ngOnInit(): void {
  }

}
