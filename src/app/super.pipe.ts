import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'super'
})
export class SuperPipe implements PipeTransform {

  transform(value: string, gender:String): string {
    if(gender.toLowerCase()=='male')
      return 'mr.' + value;
      else {
        return 'mrs.' +value;
      }

      

    
  }
}
