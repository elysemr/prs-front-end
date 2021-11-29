import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;
  user!: User;

  constructor(private route: ActivatedRoute, private usersvc: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.usersvc.getByPk(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
