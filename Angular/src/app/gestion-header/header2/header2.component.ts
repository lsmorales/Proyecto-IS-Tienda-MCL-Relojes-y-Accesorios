import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service'; // Importa el servicio

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
  constructor(
    public auth: AutenticacionService,
    public carritoService: CarritoService // Inyecta el servicio
  ) {}

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}