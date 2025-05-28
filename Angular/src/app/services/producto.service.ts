// src/app/services/producto.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly STORAGE_KEY = 'productos';

  constructor() { }

  // Obtener todos los productos
  getProductos(): Producto[] {
    const productosString = localStorage.getItem(this.STORAGE_KEY);
    return productosString ? JSON.parse(productosString) : [];
  }

  // Guardar todos los productos
  private saveProductos(productos: Producto[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(productos));
  }

  // Agregar o actualizar producto
  saveProducto(producto: Producto): void {
    const productos = this.getProductos();
    const index = productos.findIndex(p => p.id === producto.id);

    if (index >= 0) {
      productos[index] = producto; // Actualizar
    } else {
      productos.push(producto); // Agregar nuevo
    }

    this.saveProductos(productos);
  }

  // Eliminar producto
  deleteProducto(id: number): void {
    const productos = this.getProductos().filter(p => p.id !== id);
    this.saveProductos(productos);
  }

  // Generar nuevo ID
  generateId(): number {
    const productos = this.getProductos();
    return productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
  }
}