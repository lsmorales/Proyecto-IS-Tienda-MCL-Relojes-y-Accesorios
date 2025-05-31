// src/app/gestion-carrito/carrito/carrito.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: Producto[] = [];

  constructor(private carritoService: CarritoService) {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.productos = this.carritoService.getCarrito();
  }

  eliminarProducto(id: number): void {
    this.carritoService.eliminarProducto(id);
    this.cargarCarrito();
  }

  calcularTotal(): number {
    return this.carritoService.calcularTotal();
  }

  actualizarCantidad(id: number, nuevaCantidad: number): void {
    if (nuevaCantidad < 1) return;
    this.carritoService.actualizarCantidad(id, nuevaCantidad);
    this.cargarCarrito();
  }

  getCantidadEnCarrito(productoId: number): number {
  const carrito = this.carritoService.getCarrito();
  const item = carrito.find(p => p.id === productoId);
  return item?.cantidad ?? 0;
}
  incrementarCantidad(id: number): void {
  this.carritoService.incrementarCantidad(id);
  this.cargarCarrito();
}

disminuirCantidad(id: number): void {
  this.carritoService.disminuirCantidad(id);
  this.cargarCarrito();
}

formatearPrecio(precio: number): string {
  return precio.toFixed(2).replace('.', ',') + ' €';
}
}
