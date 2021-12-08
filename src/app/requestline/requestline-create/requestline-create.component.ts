import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/user/system.service';
import { RequestLineService } from '../request-line.service';
import { Requestline } from '../requestline.class';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  id: any;
  requestline: Requestline = new Requestline();
  products!: Product[];
  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private prodsvc: ProductService, private rlsvc: RequestLineService, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params["id"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res as Product[];
      }
    });
  }

  save(): void {
    this.rlsvc.addRequestline(this.requestline).subscribe({
      next: (res: any) => {
        console.log(res, "Requestline added.")
        res as Requestline;
        this.router.navigateByUrl(`/request/line/${this.requestline.requestId}`);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

 

}