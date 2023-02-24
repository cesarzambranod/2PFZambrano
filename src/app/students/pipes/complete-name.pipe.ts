import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../../model/student";

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(value: Student): string {
    return `${value.nombre} ${value.apellido}`;
  }

}
