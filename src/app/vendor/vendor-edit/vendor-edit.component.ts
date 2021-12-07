import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import Swal from 'sweetalert2';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  id: any;
  vendor!: Vendor;
  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private vndsvc: VendorService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.vndsvc.getByPk(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res as Vendor;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  save(): void {
    console.log(this.vendor);
    this.vndsvc.editVendor(this.vendor).subscribe({
      next: (res: any) => {
        console.log(res, "Changes saved.");
        res as Vendor;
        this.router.navigateByUrl("/vendor/list");
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
        text: "Selecting 'Delete' will delete this vendor forever.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
        cancelButtonText: "Back to Vendor",
      }).then((res) =>  {
        if(res.isConfirmed) {
          this.confirm();
        } else if (res.isDismissed) {
          this.router.navigateByUrl("/vendor/detail/{{vendor.id}}");
        }
      })
    }
  }
  confirm(): void {
    this.vndsvc.deleteVendor(this.vendor.id).subscribe({
      next: (res: any) => {
        console.debug(res, "Vendor deleted.");
        this.router.navigateByUrl("/vendor/list");
        
      }
    })
  }

}
