import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  statusStyle: string = "bold";
  request!: Request;

  transform(status: string): string {
      if(this.request.status === "REVIEW") { this.statusStyle = "text-warning bold"; }
      if(this.request.status === "APPROVED") { this.statusStyle = "text-success bold"; }
      if(this.request.status === "REJECTED") { this.statusStyle = "text-danger bold"; }
      if(this.request.status === "NEW") { this.statusStyle = "text-primary bold"; }
      return this.statusStyle;
    }
  }


