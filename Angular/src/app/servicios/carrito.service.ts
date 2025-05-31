// src/app/servicios/carrito.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly STORAGE_KEY = 'carrito';

  constructor() {}

  getCarrito(): Producto[] {
    const carritoString = localStorage.getItem(this.STORAGE_KEY);
    return carritoString ? JSON.parse(carritoString) : [];
  }

  private guardarCarrito(productos: Producto[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(productos));
  }

  agregarProducto(producto: Producto): void {
    const carrito = this.getCarrito();
    const existente = carrito.find(p => p.id === producto.id);

    if (existente) {
      existente.cantidad = (existente.cantidad || 1) + (producto.cantidad || 1);
    } else {
      carrito.push({ ...producto, cantidad: producto.cantidad || 1 });
    }

    this.guardarCarrito(carrito);
  }

  eliminarProducto(id: number): void {
    const carrito = this.getCarrito().filter(p => p.id !== id);
    this.guardarCarrito(carrito);
  }

  vaciarCarrito(): void {
    this.guardarCarrito([]);
  }

  calcularTotal(): number {
    return this.getCarrito().reduce((total, producto) => {
      const cantidad = producto.cantidad || 1;
      return total + producto.precio * cantidad;
    }, 0);
  }

  getCantidadItems(): number {
    return this.getCarrito().reduce((sum, producto) => {
      return sum + (producto.cantidad || 1);
    }, 0);
  }

  actualizarCantidad(id: number, nuevaCantidad: number): void {
    const carrito = this.getCarrito();
    const index = carrito.findIndex(p => p.id === id);

    if (index !== -1) {
      carrito[index].cantidad = nuevaCantidad > 0 ? nuevaCantidad : 1;
      this.guardarCarrito(carrito);
    }
  }

  // NUEVO: Incrementar cantidad
  incrementarCantidad(id: number): void {
    const carrito = this.getCarrito().map(p => {
      if (p.id === id) {
        p.cantidad = (p.cantidad || 1) + 1;
      }
      return p;
    });
    this.guardarCarrito(carrito);
  }

  // NUEVO: Disminuir cantidad
  disminuirCantidad(id: number): void {
    let carrito = this.getCarrito().map(p => {
      if (p.id === id) {
        p.cantidad = (p.cantidad || 1) - 1;
      }
      return p;
    }).filter(p => (p.cantidad || 0) > 0); // elimina si llega a 0
    this.guardarCarrito(carrito);
  }
}
