import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  user!: User;

  transform(id: number): string {
    if (this.user.id) {
    }
    
    return this.user.username;
  }
  
  
}
