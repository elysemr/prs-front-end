import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import Swal from 'sweetalert2';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  vendor!: Vendor;
  searchCriteria: string = "";
  confirmDelete: boolean = false;

  constructor(
    private vndsvc: VendorService, private router: Router, private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
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
        text: "Selecting 'Delete' will delete this vendor forever.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
        cancelButtonText: "Back to Vendors",
      }).then((res) =>  {
        if(res.isConfirmed) {
          this.confirm();
        } else if (res.isDismissed) {
          this.router.navigateByUrl("/vendor/list");
        }
      })
    }
  }
  confirm(): void {
    this.vndsvc.deleteVendor(this.vendor.id).subscribe({
      next: (res: any) => {
        console.debug(res, "Vendor deleted.");
        
      }
    })
  }


}
