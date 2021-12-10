import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reqSearch'
})
export class ReqSearchPipe implements PipeTransform {

  transform(arr: any[], searchCriteria: string = ""): any[] {
    if(searchCriteria === "") {return arr;}
    searchCriteria = searchCriteria.toLowerCase();
    let selArr: any[] = [];
    for(let a of arr) {
      if(
        a.id.toString().toLowerCase().includes(searchCriteria) ||
        a.description.toString().toLowerCase().includes(searchCriteria) ||
        a.justification.toString().toLowerCase().includes(searchCriteria) ||
        a.deliveryMode.toString().toLowerCase().includes(searchCriteria) ||
        a.rejectionReason?.toString().toLowerCase().includes(searchCriteria) ||
        a.status.toString().toLowerCase().includes(searchCriteria) ||
        a.total.toString().toLowerCase().includes(searchCriteria) ||
        a.user?.username.toString().toLowerCase().includes(searchCriteria)
      ) {
        selArr.push(a);
      }
    }
    return selArr;
  }

}
