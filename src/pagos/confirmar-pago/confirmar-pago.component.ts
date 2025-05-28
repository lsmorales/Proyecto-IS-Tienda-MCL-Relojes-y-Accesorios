import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagoService } from '../../app/services/pago.service';
import { Pago } from '../../app/models/pago.model';

@Component({
  selector: 'app-confirmar-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmar-pago.component.html',
  styleUrls: ['./confirmar-pago.component.css']
})
export class ConfirmarPagoComponent implements OnInit {
  pagosPendientes: Pago[] = [];
  selectedId: string | null = null;
  razonRechazo: string = '';

  constructor(private pagoService: PagoService) {}

  ngOnInit(): void {
    this.pagoService.pagos$.subscribe((pagos: Pago[]) => {
    this.pagosPendientes = pagos.filter((p: Pago) => p.estado === 'pendiente');
    });
  }

  confirmar(id: string) {
    this.pagoService.confirmarPago(id);
    this.reset();
  }

  rechazar(id: string) {
    if (this.razonRechazo.trim()) {
      this.pagoService.rechazarPago(id, this.razonRechazo);
      this.reset();
    } else {
      alert('Debes ingresar una razón del rechazo');
    }
  }

  toggleRechazo(id: string) {
    this.selectedId = this.selectedId === id ? null : id;
    this.razonRechazo = '';
  }

  private reset() {
    this.selectedId = null;
    this.razonRechazo = '';
  }
}






