import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baseAngular02';
  nombre = 'FELIPE DA LEON'

  duplicarNum(numero:number):number
  {
   return numero *2;
  }
  pelicula=
  {
    titulo:'amores perros',
    anio:new Date(),
    precio: 2500,
  }
}
