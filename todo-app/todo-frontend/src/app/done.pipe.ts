import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: string, args?: boolean): string {
    return (args) ? `${value} ✔` : value;
  }

}
