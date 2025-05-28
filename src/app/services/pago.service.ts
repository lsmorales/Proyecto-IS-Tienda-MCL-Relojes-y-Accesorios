import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pago } from '../models/pago.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class PagoService {
  private pagosSubject = new BehaviorSubject<Pago[]>([]);
  pagos$ = this.pagosSubject.asObservable();

  registrarPago(pago: Omit<Pago, 'id' | 'estado'>) {
    const nuevoPago: Pago = { id: uuidv4(), ...pago, estado: 'pendiente' };
    const pagos = this.pagosSubject.value;
    this.pagosSubject.next([...pagos, nuevoPago]);
  }
  

  confirmarPago(id: string) {
    this.actualizarEstado(id, 'confirmado');
  }

  rechazarPago(id: string, razon: string) {
    this.actualizarEstado(id, 'rechazado', razon);
  }

  private actualizarEstado(id: string, estado: Pago['estado'], razonRechazo?: string) {
    const pagos = this.pagosSubject.value.map(p =>
      p.id === id ? { ...p, estado, razonRechazo } : p
    );
    this.pagosSubject.next(pagos);
  }

  eliminarPago(id: string) {
    const pagos = this.pagosSubject.value.filter(p => p.id !== id);
    this.pagosSubject.next(pagos);
  }
}


