import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'null'
})
export class NullPipe implements PipeTransform {

  transform(nullVal:any): string {
    if (nullVal === null ){
      return "N/A";
    }
    return nullVal;
    
   
}

}
