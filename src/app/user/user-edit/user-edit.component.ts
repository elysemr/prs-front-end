import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: any;
  user!: User;

  constructor(private route: ActivatedRoute, private usersvc: UserService) { }

  ngOnInit(): void {
  let id = +this.route.snapshot.params["id"];
    this.usersvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res as User;
      },
      error: (err) => {
        console.error(err);
      }
    })

  }

}
