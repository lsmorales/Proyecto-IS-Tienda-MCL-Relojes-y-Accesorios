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
    this.cargarCarrito(); // Recargar la lista
  }

  calcularTotal(): number {
    return this.carritoService.calcularTotal();
  }
}