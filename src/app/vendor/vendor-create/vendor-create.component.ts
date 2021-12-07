import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  constructor(private vndsvc: VendorService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
  }
  
    save(): void {
      this.vndsvc.addVendor(this.vendor).subscribe({
        next: (res: any) => {
          console.log("Vendor created.");
          res as Vendor;
          this.router.navigateByUrl("/vendor/list");
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  

}
