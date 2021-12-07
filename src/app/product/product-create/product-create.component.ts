import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors!: Vendor[];

  constructor(private prodsvc: ProductService, private vndsvc: VendorService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", this.vendors);
        this.vendors = res as Vendor[];
      }
    });
    
  }

  save(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res as Vendor[];
      }
    });
    this.prodsvc.addProduct(this.product).subscribe({
      next: (res: any) => {
        console.log("Product added.");
        res as Product;
        this.router.navigateByUrl("/product/list");
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
