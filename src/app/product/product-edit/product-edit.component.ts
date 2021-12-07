import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import Swal from 'sweetalert2';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: any;
  product!: Product;
  vendors!: Vendor[];
  confirmDelete: boolean = false;

  constructor( private route: ActivatedRoute, private prodsvc: ProductService, private router: Router, private vndsvc: VendorService, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", this.vendors);
        this.vendors = res as Vendor[];
      }
    })
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res as Product;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  save(): void {
    console.log(this.product);
    this.prodsvc.editProduct(this.product).subscribe({
      next: (res: any) => {
        console.log(res, "Changes saved.");
        res as Product;
        this.router.navigateByUrl("/product/list");
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
        text: "Selecting 'Delete' will delete this product forever.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
        cancelButtonText: "Back to Product",
      }).then((res) =>  {
        if(res.isConfirmed) {
          this.confirm();
        } else if (res.isDismissed) {
          this.router.navigateByUrl("/product/edit/{{product.id}}");
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
