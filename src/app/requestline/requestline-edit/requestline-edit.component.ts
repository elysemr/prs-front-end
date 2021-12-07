import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';
import Swal from 'sweetalert2';
import { RequestLineService } from '../request-line.service';
import { Requestline } from '../requestline.class';
import { Request } from 'src/app/request/request.class';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  id: any;
  requestline!: Requestline;
  products!: Product[];
  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private reqsvc: RequestService, private prodsvc: ProductService, private rlsvc: RequestLineService, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res as Product[];
      }
    })

  let id = +this.route.snapshot.params["id"];
  this.rlsvc.getByPk(id).subscribe({
    next: (res) => {
      console.debug("Requestline:", res);
      this.requestline = res as Requestline;
    },
    error: (err) => {
      console.error(err);
    }
  })
  }

  save(): void {
    this.rlsvc.editRequestline(this.requestline).subscribe({
      next: (res: any) => {
        console.log(res, "Changes saved.")
        res as Requestline;
        this.router.navigateByUrl(`/request/line/${this.requestline.requestId}`);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  delete(): void {
    if(this.confirmDelete = !this.confirmDelete)
    {
      Swal.fire({
        title: "Permanently Delete?",
        text: "Selecting 'Delete' will delete this request forever.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
        cancelButtonText: "Back to Request",
      }).then((res) =>  {
        if(res.isConfirmed) {
          this.confirm();
        } else if (res.isDismissed) {
          this.router.navigateByUrl("/requestline/edit/{{requestline.id}}");
        }
      })
    }
  }
  confirm(): void {
    this.rlsvc.deleteRequestline(this.requestline.id).subscribe({
      next: (res: any) => {
        console.debug(res, "Request deleted.");
        this.router.navigateByUrl("/request/list");
        
      }
    })
  }

}
