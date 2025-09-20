import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  valorA: number = 0;
  valorB: number = 0;
  resultado: string = "";
  operacionSel: string = "";

  hacerSuma(): void {
    this.resultado = (this.valorA + this.valorB).toString();
  }

  hacerResta(): void {
    this.resultado = (this.valorA - this.valorB).toString();
  }

  hacerMultiplicacion(): void {
    this.resultado = (this.valorA * this.valorB).toString();
  }

  hacerDivision(): void {
    if (this.valorB === 0) {
      this.resultado = "No se puede dividir entre 0";
    } else {
      this.resultado = (this.valorA / this.valorB).toString();
    }
  }

  resolverOperacion(): void {
    if (this.operacionSel === "suma") {
      this.hacerSuma();
    } else if (this.operacionSel === "resta") {
      this.hacerResta();
    } else if (this.operacionSel === "multi") {
      this.hacerMultiplicacion();
    } else if (this.operacionSel === "divi") {
      this.hacerDivision();
    } else {
      this.resultado = "Selecciona una opción";
    }
  }
}
