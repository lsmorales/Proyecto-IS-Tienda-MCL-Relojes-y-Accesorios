import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { CatalogoAdministradorComponent } from '../catalogo-administradores/catalogo-administrador/catalogo-administrador.component';
import { CatalogoClienteComponent } from '../catalogo-clientes/catalogo-cliente/catalogo-cliente.component';
import { RouterModule } from '@angular/router'; // Añade esto

@Component({
  selector: 'app-control-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Añade esto
    CatalogoAdministradorComponent,
    CatalogoClienteComponent
  ],
  templateUrl: './control-catalogo.component.html',
  styleUrls: ['./control-catalogo.component.css']
})
export class ControlCatalogoComponent {
  constructor(public auth: AutenticacionService) {}
}