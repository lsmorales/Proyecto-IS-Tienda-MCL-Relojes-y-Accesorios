import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private storageKey = 'ProductosCarrito';

  obtenerProductos(): Producto[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  guardarProductos(productos: Producto[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(productos));
  }

  eliminarProducto(id: number): void {
    const productos = this.obtenerProductos().filter(p => p.id !== id);
    this.guardarProductos(productos);
  }

  vaciarCarrito(): void {
    this.guardarProductos([]);
  }
}

