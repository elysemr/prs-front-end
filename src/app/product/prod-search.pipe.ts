import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodSearch'
})
export class ProdSearchPipe implements PipeTransform {

  transform(arr: any[], searchCriteria: string = ""): any[] {
    if(searchCriteria === "") {return arr;}
    searchCriteria = searchCriteria.toLowerCase();
    let selArr: any[] = [];
    for (let a of arr) {
      if (
        a.id.toString().toLowerCase().includes(searchCriteria)||
        a.partNbr.toString().toLowerCase().includes(searchCriteria)||
        a.name.toString().toLowerCase().includes(searchCriteria)||
        a.price.toString().toLowerCase().includes(searchCriteria)||
        a.unit.toString().toLowerCase().includes(searchCriteria)||
        a.vendor?.name.toString().toLowerCase().includes(searchCriteria)

      ) {
        selArr.push(a);
      }
    }
    return selArr;
  }
}