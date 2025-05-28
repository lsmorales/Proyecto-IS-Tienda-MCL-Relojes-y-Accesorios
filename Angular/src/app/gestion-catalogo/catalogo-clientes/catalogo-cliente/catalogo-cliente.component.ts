import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';


@Component({
  selector: 'app-catalogo-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productoService.getProductos();
  }

  formatearPrecio(precio: number): string {
    return precio.toFixed(2).replace('.', ',') + ' €';
  }
}
