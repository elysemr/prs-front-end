import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'admin'
})
export class AdminPipe implements PipeTransform {


  transform(adminBool: boolean): string {
    return (adminBool) ? "YES" : "NO";
  }
}


