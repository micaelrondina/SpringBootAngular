import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dataformatada: moment.Moment = moment(date,'DDMMYYYY');
    return dataformatada.format('DD/MM/YYYY');
  }

}
