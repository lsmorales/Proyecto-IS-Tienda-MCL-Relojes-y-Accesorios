import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../servicios/producto.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-catalogo-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productoService.getProductos();
  }

  formatearPrecio(precio: number): string {
    return precio.toFixed(2).replace('.', ',') + ' €';
  }

  agregarAlCarrito(producto: Producto): void {
    const productoConCantidad = { ...producto, cantidad: 1 }; // añadimos la propiedad cantidad
    this.carritoService.agregarProducto(productoConCantidad);
    alert(`${producto.nombre} añadido al carrito`);
  }
}

