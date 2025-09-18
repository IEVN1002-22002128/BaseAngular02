import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from './heroes';

@Pipe({
  name: 'heroesFilter',
  standalone: false
})
export class HeroesFilterPipe implements PipeTransform {

  transform(value: Heroes[], args:string): Heroes[] {
    let filter:string=args?args.toLowerCase():'';
    return filter?value.filter((hero:Heroes)=>
      hero.nombre.toLowerCase().indexOf(filter)!==-1):value;
  }

}
