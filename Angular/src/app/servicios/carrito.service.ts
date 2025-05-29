// src/app/servicios/carrito.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() {}

  private getUsuarioActivo(): any {
    const user = localStorage.getItem('usuarioActivo');
    return user ? JSON.parse(user) : null;
  }

  private guardarUsuarioActivo(usuario: any): void {
    localStorage.setItem('usuarioActivo', JSON.stringify(usuario));

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const index = usuarios.findIndex((u: any) => u.usuario === usuario.usuario);
    if (index !== -1) {
      usuarios[index] = usuario;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }

  getCarrito(): Producto[] {
    const usuario = this.getUsuarioActivo();
    return usuario?.carrito || [];
  }

  private guardarCarrito(productos: Producto[]): void {
    const usuario = this.getUsuarioActivo();
    if (usuario) {
      usuario.carrito = productos;
      this.guardarUsuarioActivo(usuario);
    }
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
      return total + producto.precio * (producto.cantidad || 1);
    }, 0);
  }

  getCantidadItems(): number {
    return this.getCarrito().reduce((sum, producto) => sum + (producto.cantidad || 1), 0);
  }

  actualizarCantidad(id: number, nuevaCantidad: number): void {
    const carrito = this.getCarrito();
    const producto = carrito.find(p => p.id === id);
    if (producto) {
      producto.cantidad = nuevaCantidad > 0 ? nuevaCantidad : 1;
      this.guardarCarrito(carrito);
    }
  }

  incrementarCantidad(id: number): void {
    const carrito = this.getCarrito().map(p => {
      if (p.id === id) {
        p.cantidad = (p.cantidad || 1) + 1;
      }
      return p;
    });
    this.guardarCarrito(carrito);
  }

  disminuirCantidad(id: number): void {
    const carrito = this.getCarrito().map(p => {
      if (p.id === id) {
        p.cantidad = (p.cantidad || 1) - 1;
      }
      return p;
    }).filter(p => (p.cantidad || 0) > 0);
    this.guardarCarrito(carrito);
  }
}
