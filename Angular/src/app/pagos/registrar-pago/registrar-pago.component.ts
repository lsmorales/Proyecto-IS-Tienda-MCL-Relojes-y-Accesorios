import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagoService } from '../../servicios/pago.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-registrar-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css']
})
export class RegistrarPagoComponent {
  metodoSeleccionado: 'pago_movil' | 'transferencia' = 'pago_movil';
  montoSistema: number = 0;
  referencia: string = '';
  usuario: string = 'usuario_demo';

  nombreTitular: string = '';
  cedulaTitular: string = '';
  bancoOrigen: string = '';
  fechaTransferencia: string = '';

  imagenBase64: string = '';

  constructor(private pagoService: PagoService, private carritoService: CarritoService) {
    this.montoSistema = this.carritoService.calcularTotal();
  }

  enviarPago() {
    const esValido = /^[0-9]{12,20}$/.test(this.referencia);
    if (!esValido) {
      alert('El número de referencia debe tener entre 12 y 20 dígitos numéricos.');
      return;
    }

    if (!this.imagenBase64) {
      alert('Por favor, sube una imagen del comprobante de pago.');
      return;
    }

    if (this.metodoSeleccionado === 'transferencia') {
      if (
        !this.nombreTitular.trim() ||
        !this.cedulaTitular.trim() ||
        !this.bancoOrigen.trim() ||
        !this.fechaTransferencia
      ) {
        alert('Por favor, completa todos los datos de la transferencia.');
        return;
      }
    }

    this.registrarPago();
  }

  registrarPago() {
    this.pagoService.registrarPago({
      metodo: this.metodoSeleccionado,
      monto: this.montoSistema,
      referencia: this.referencia,
      usuario: this.usuario,
      nombreTitular: this.nombreTitular,
      cedulaTitular: this.cedulaTitular,
      bancoOrigen: this.bancoOrigen,
      fechaTransferencia: this.fechaTransferencia,
      imagenBase64: this.imagenBase64
    });

    // Limpiar campos
    this.referencia = '';
    this.nombreTitular = '';
    this.cedulaTitular = '';
    this.bancoOrigen = '';
    this.fechaTransferencia = '';
    this.imagenBase64 = '';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}