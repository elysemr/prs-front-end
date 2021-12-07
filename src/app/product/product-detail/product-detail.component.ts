import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import Swal from 'sweetalert2';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product!: Product;

  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private prodsvc: ProductService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.prodsvc.getByPk(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  delete(): void {
    if(this.confirmDelete = !this.confirmDelete)
    {
      Swal.fire({
        title: "Permanently Delete?",
        text: "Selecting 'Delete' will delete this product forever.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
        cancelButtonText: "Back to Product Detail",
      }).then((res) =>  {
        if(res.isConfirmed) {
          this.confirm();
        } else if (res.isDismissed) {
          this.router.navigateByUrl("/product/detail/{{product.id}}");
        }
      })
    }
  }
  confirm(): void {
    this.prodsvc.deleteProduct(this.product.id).subscribe({
      next: (res: any) => {
        console.debug(res, "Product deleted.");
        this.router.navigateByUrl("/product/list");
        
      }
    })
  }
}
