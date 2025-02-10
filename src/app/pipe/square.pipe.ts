import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args)
    return "chandana";
  }

}
