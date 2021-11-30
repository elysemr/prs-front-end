import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'review'
})
export class ReviewPipe implements PipeTransform {

  
  transform(revBool: boolean): string {
    return (revBool) ? "YES" : "NO";
  }

}

