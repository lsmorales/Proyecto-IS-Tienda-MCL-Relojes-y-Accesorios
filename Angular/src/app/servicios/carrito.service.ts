// src/app/servicios/carrito.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly STORAGE_KEY = 'carrito';

  constructor() {}

  // Obtener todos los items del carrito
  getCarrito(): Producto[] {
    const carritoString = localStorage.getItem(this.STORAGE_KEY);
    return carritoString ? JSON.parse(carritoString) : [];
  }

  // Guardar el carrito en localStorage
  private guardarCarrito(productos: Producto[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(productos));
  }

  // Añadir producto al carrito
  agregarProducto(producto: Producto): void {
    const carrito = this.getCarrito();
    carrito.push({...producto});
    this.guardarCarrito(carrito);
  }

  // Eliminar producto del carrito
  eliminarProducto(id: number): void {
    const carrito = this.getCarrito().filter(p => p.id !== id);
    this.guardarCarrito(carrito);
  }

  // Vaciar el carrito
  vaciarCarrito(): void {
    this.guardarCarrito([]);
  }

  // Calcular total
  calcularTotal(): number {
    return this.getCarrito().reduce((total, producto) => total + producto.precio, 0);
  }

  // Obtener cantidad de items
  getCantidadItems(): number {
    return this.getCarrito().length;
  }
}