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
    this.productos = this.carritoService.obtenerProductos();
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
    this.productos = this.carritoService.obtenerProductos();
  }

  irAPagos() {
    this.router.navigate(['/pagos']);
  }
}
