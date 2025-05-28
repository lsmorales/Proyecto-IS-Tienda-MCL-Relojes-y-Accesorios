import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-catalogo-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo-administrador.component.html',
  styleUrls: ['./catalogo-administrador.component.css']
})
export class CatalogoAdministradorComponent implements OnInit {
  mostrarModal = false;
  modoEdicion = false;
  productoEditadoId: number | null = null;

  nuevoProducto = {
    nombre: '',
    descripcion: '',
    tipo: '',
    precio: 0,
    imagen: ''
  };

  productos: Producto[] = [];
  tiposProductos = [{ value: 'reloj', label: 'Reloj' }];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productoService.getProductos();
  }

  abrirModal(producto?: Producto): void {
    if (producto) {
      this.modoEdicion = true;
      this.productoEditadoId = producto.id;
      this.nuevoProducto = { ...producto };
    } else {
      this.modoEdicion = false;
      this.productoEditadoId = null;
      this.nuevoProducto = {
        nombre: '',
        descripcion: '',
        tipo: '',
        precio: 0,
        imagen: ''
      };
    }
    this.mostrarModal = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    document.body.style.overflow = 'auto';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        this.nuevoProducto.imagen = e.target?.result as string;
      };
      
      reader.readAsDataURL(file);
    }
  }

  guardarProducto(): void {
    if (!this.nuevoProducto.nombre || !this.nuevoProducto.descripcion || 
        !this.nuevoProducto.tipo || this.nuevoProducto.precio <= 0) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    const producto: Producto = {
      id: this.modoEdicion && this.productoEditadoId 
           ? this.productoEditadoId 
           : this.productoService.generateId(),
      ...this.nuevoProducto
    };

    this.productoService.saveProducto(producto);
    this.cargarProductos();
    this.cerrarModal();
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productoService.deleteProducto(id);
      this.cargarProductos();
    }
  }
}