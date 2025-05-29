import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../servicios/carrito.service';
import { Producto } from '../models/producto.model';

@Component({
  standalone: true,
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: Producto[] = [];

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {
    // Si el carrito está vacío, cargamos productos de prueba
    if (this.carritoService.obtenerProductos().length === 0) {
      const mock: Producto[] = [
        {
          id: 1,
          nombre: 'Producto A',
          descripcion: 'Descripción del producto A',
          tipo: 'general',
          precio: 29.99,
          imagen: 'https://via.placeholder.com/120'
        },
        {
          id: 2,
          nombre: 'Producto B',
          descripcion: 'Descripción del producto B',
          tipo: 'general',
          precio: 49.99,
          imagen: 'https://via.placeholder.com/120'
        }
      ];
      this.carritoService.guardarProductos(mock);
    }

    this.productos = this.carritoService.obtenerProductos();
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
    this.productos = this.carritoService.obtenerProductos();
  }

  irAPagos() {
    this.carritoService.vaciarCarrito();
    this.router.navigate(['/pagos']);
  }
}

