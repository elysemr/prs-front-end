import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import Swal from 'sweetalert2';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  product!: Product;
  searchCriteria: string = "";
  confirmDelete: boolean = false;

  constructor(
    private prodsvc: ProductService, private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res as Product[];
        
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // delete(): void {
  //   if(this.confirmDelete = !this.confirmDelete)
  //   {
  //     Swal.fire({
  //       title: "Permanently Delete?",
  //       text: "Selecting 'Delete' will delete this product forever.",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Delete",
  //       confirmButtonColor: "red",
  //       cancelButtonText: "Back to Products",
  //     }).then((res) =>  {
  //       if(res.isConfirmed) {
  //         this.confirm();
  //       } else if (res.isDismissed) {
  //         this.router.navigateByUrl("/product/list");
  //       }
  //     })
  //   }
  // }
  // confirm(): void {
  //   this.prodsvc.deleteProduct(this.product.id).subscribe({
  //     next: (res: any) => {
  //       console.debug(res, "Product deleted.");
        
  //     }
  //   })
  // }

}
