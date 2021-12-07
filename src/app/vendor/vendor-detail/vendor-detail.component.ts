import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/user/system.service';
import Swal from 'sweetalert2';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  id: any;
  vendor!: Vendor;

  confirmDelete: boolean = false;

  constructor(private route: ActivatedRoute, private vndsvc: VendorService, private router: Router, private syssvc: SystemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.vndsvc.getByPk(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.vendor = res;
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
        cancelButtonText: "Back to Vendor Detail",
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
