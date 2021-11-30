import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], searchCriteria: string = ""): any[] {
    if(searchCriteria === "") {return arr;}
    searchCriteria = searchCriteria.toLowerCase();
    let selArr: any[] = [];
    for (let a of arr) {
      if (
        a.id.toString().toLowerCase().includes(searchCriteria) ||
        a.username.toString().toLowerCase().includes(searchCriteria) ||
        a.firstname.toString().toLowerCase().includes(searchCriteria) ||
        a.lastname.toString().toLowerCase().includes(searchCriteria) ||
        a.email.toString().toLowerCase().includes(searchCriteria) ||
        a.phone.toString().toLowerCase().includes(searchCriteria) 
      ) {
        selArr.push(a);
      }
    }
    return selArr;
  }

}
