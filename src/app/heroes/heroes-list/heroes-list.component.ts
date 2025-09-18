import { Component } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
  
})
export class HeroesListComponent
{
  listFiltro:string='';
  muestraImg:boolean=true;
  showImg()
  {
    this.muestraImg=!this.muestraImg;
  }
heroes:Heroes[]=[
{

  imagen:"https://dragonball-api.com/characters/goku_normal.webp",
  nombre:"GOKU",
  descripcion:"KAKAROTO",
  especie:"Saiyan",
  ki:9001,

},
{
  imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
  nombre:"VEGETA",
  descripcion:"principe de los saiyan",
  especie:"Saiyan",
  ki:9001,
},
{
  imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
  nombre:"Piccolo",
  descripcion:"epico",
  especie:"Namekesuiyin",
  ki:2000000,
},
{
  imagen:"https://dragonball-api.com/characters/bulma.webp",
  nombre:"Bulma",
  descripcion:"epica",
  especie:"Humano",
  ki:9001,
}
]
}
