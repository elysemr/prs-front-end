import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'review'
})
export class ReviewPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
