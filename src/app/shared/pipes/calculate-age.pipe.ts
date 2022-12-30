import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const currentDate = new Date();
    const dateValue = new Date(String(value))
    return (currentDate.getFullYear() - dateValue.getFullYear());
  }

}
