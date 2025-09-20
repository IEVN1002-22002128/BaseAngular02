import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
num1:string="";
num2:string="";
res:string="";
tipOperacion:string="";

sumar():void
{
  this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
}
restar():void
{
  this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
}
multiplicar():void
{
  this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
}
dividir():void
{
  this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
}

ejecutarOperacion()
{
  switch(this.tipOperacion)
  {
    case "0": this.sumar();
    break;
    case "1": this.restar();
    break;
    case "2": this.multiplicar();
    break;
    case "3": this.dividir();
    break;
  }
}

}
