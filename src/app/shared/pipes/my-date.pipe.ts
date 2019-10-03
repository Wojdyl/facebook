import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(dateString: string): any {
    const date = new Date(dateString);
    if ( isNaN.call(null, date ) || !dateString ) return '';
    if ( !dateString ) return '';

    return date.toLocaleDateString('pl-pl', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

}
