import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {
  
    transform(arr: any[], searchCriteria: string = ""): any[] {
      if(searchCriteria === "") {return arr;}
      searchCriteria = searchCriteria.toLowerCase();
      let selArr: any[] = [];
      for (let a of arr) {
        if (
          a.id.toString().toLowerCase().includes(searchCriteria)||
          a.code.toString().toLowerCase().includes(searchCriteria)||
          a.name.toString().toLowerCase().includes(searchCriteria)||
          a.address.toString().toLowerCase().includes(searchCriteria)||
          a.city.toString().toLowerCase().includes(searchCriteria)||
          a.state.toString().toLowerCase().includes(searchCriteria)||
          a.zip.toString().toLowerCase().includes(searchCriteria) ||
          (a.phone !== null && a.phone.toString().toLowerCase().includes(searchCriteria)) ||
          (a.email !== null && a.email.toString().toLowerCase().includes(searchCriteria))
  
        ) {
          selArr.push(a);
        }
      }
      return selArr;
    }
  }


