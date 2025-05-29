import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Pago } from '../models/pago.model';

@Injectable({ providedIn: 'root' })
export class PagoService {
  private pagosSubject: BehaviorSubject<Pago[]>;
  pagos$: Observable<Pago[]>;

  constructor() {
    const datosGuardados = this.cargarPagos();
    this.pagosSubject = new BehaviorSubject<Pago[]>(datosGuardados);
    this.pagos$ = this.pagosSubject.asObservable();
  }

  private cargarPagos(): Pago[] {
    const datos = localStorage.getItem('pagos');
    return datos ? JSON.parse(datos) : [];
  }

  private guardarPagos(pagos: Pago[]) {
    localStorage.setItem('pagos', JSON.stringify(pagos));
  }

  registrarPago(pago: Omit<Pago, 'id' | 'estado'>) {
    const nuevoPago: Pago = {
      id: this.generarId(),
      ...pago,
      estado: 'pendiente'
    };
    const pagos = [...this.pagosSubject.value, nuevoPago];
    this.pagosSubject.next(pagos);
    this.guardarPagos(pagos);
  }

  confirmarPago(id: string) {
    this.actualizarEstado(id, 'confirmado');
  }

  rechazarPago(id: string, razon: string) {
    this.actualizarEstado(id, 'rechazado', razon);
  }

  private actualizarEstado(id: string, estado: 'pendiente' | 'confirmado' | 'rechazado', razonRechazo?: string) {
    const pagos = this.pagosSubject.value.map(p =>
      p.id === id ? { ...p, estado, razonRechazo } : p
    );
    this.pagosSubject.next(pagos);
    this.guardarPagos(pagos);
  }

  eliminarPago(id: string) {
    const pagos = this.pagosSubject.value.filter(p => p.id !== id);
    this.pagosSubject.next(pagos);
    this.guardarPagos(pagos);
  }

  private generarId(): string {
    return crypto.randomUUID(); // Usa esto si tienes soporte para Web Crypto
  }
}