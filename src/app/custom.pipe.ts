import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(name: string,Gender:string): string {
    if(Gender.toLocaleLowerCase()=='male'){
      return 'Mr.'+name;
    }
    else{
      return 'Mrs.'+name;
    }
  }

}
