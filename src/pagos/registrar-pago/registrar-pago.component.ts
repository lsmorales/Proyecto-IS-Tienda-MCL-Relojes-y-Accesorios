import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagoService } from '../../app/services/pago.service';

@Component({
  selector: 'app-registrar-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css']
})
export class RegistrarPagoComponent {
  metodoSeleccionado: 'pago_movil' | 'transferencia' = 'pago_movil';
  monto: number = 30; // Monto fijo proporcionado por el sistema
  montoSistema: number = 250; 
  referencia: string = '';
  usuario: string = 'usuario_demo';

  constructor(private pagoService: PagoService) {}

  enviarPago() {
    this.registrarPago();
  }

  registrarPago() {
    this.pagoService.registrarPago({
      metodo: this.metodoSeleccionado,
      monto: this.monto,
      referencia: this.referencia,
      usuario: this.usuario
    });

    this.referencia = '';
  }
}
