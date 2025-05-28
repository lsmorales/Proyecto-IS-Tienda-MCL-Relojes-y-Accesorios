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
  monto: number = 30;
  montoSistema: number = 250;
  referencia: string = '';
  usuario: string = 'usuario_demo';
  imagenBase64: string = ''; // ✅ Imagen codificada en base64
  imagenCargada: boolean = false; // ✅ Útil para mostrar/hide vista previa

  constructor(private pagoService: PagoService) {}

  enviarPago() {
    const esValido = /^[0-9]{12,20}$/.test(this.referencia);
    if (!esValido) {
      alert('El número de referencia debe tener entre 12 y 20 dígitos numéricos.');
      return;
    }

    if (!this.imagenBase64) {
      alert('Por favor, sube una captura del comprobante de pago.');
      return;
    }

    this.registrarPago();
  }

  registrarPago() {
    this.pagoService.registrarPago({
      metodo: this.metodoSeleccionado,
      monto: this.monto,
      referencia: this.referencia,
      usuario: this.usuario,
      imagenBase64: this.imagenBase64
    });

    this.referencia = '';
    this.imagenBase64 = '';
    this.imagenCargada = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagenBase64 = reader.result as string;
        this.imagenCargada = true;
        localStorage.setItem('capturaPago', this.imagenBase64);
      };

      reader.readAsDataURL(file);
    }
  }
}


