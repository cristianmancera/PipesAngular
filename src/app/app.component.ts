import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Cristian Amador';
  nombre2: string = 'CrisTiaN amAdor';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;

  videoUrl: string = 'https://www.youtube.com/embed/2RlsAjegK3M';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('LLego la info')
    }, 4500);
  });
  heroe = {
    nombre: 'Cristian',
    apellido: 'Amador',
    edad: 18,
    direccion: {
      mz: 'J',
      cs: 10
    }
  }
}
