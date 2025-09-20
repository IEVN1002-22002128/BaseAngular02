import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  compradores: number = 0;
  boletos: number = 0;
  tarjeta: string = ''; // 'si' o 'no'
  total: number = 0;
  mensaje: string = '';

  calcular(): void {
    let boletosMax = this.compradores * 7;

    if (this.boletos > boletosMax) {
      this.mensaje = `No puedes comprar más de ${boletosMax} boletos (${this.compradores} compradores x 7).`;
      this.total = 0;
      return;
    }

    let precioUnitario = 12; // $12 por boleto
    let subtotal = this.boletos * precioUnitario;
    let descuento = 0;

    // Descuento por cantidad
    if (this.boletos > 5) {
      descuento = subtotal * 0.15;
    } else if (this.boletos >= 3) {
      descuento = subtotal * 0.10;
    }

    let totalConDescuento = subtotal - descuento;

    // Descuento adicional por tarjeta
    if (this.tarjeta === 'si') {
      totalConDescuento -= totalConDescuento * 0.10;
    }

    this.total = totalConDescuento;
    this.mensaje = `El total a pagar por ${this.boletos} boletos es: $${this.total.toFixed(2)}`;
  }
}
