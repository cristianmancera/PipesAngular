import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): unknown {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    nombres = nombres.map(nombre => {
      return nombre[0].toUpperCase() + nombre.substr(1);
    })
    return nombres.join(' ');
  }

}
