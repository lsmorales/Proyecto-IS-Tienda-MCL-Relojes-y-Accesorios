import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { CatalogoAdministradorComponent } from '../catalogo-administrador/catalogo-administrador.component';
import { CatalogoClienteComponent } from '../catalogo-cliente/catalogo-cliente.component';
import { RouterModule } from '@angular/router'; // Añade esto

@Component({
  selector: 'app-control-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    CatalogoAdministradorComponent,
    CatalogoClienteComponent,
    RouterModule // Añade esto   
  ],
  templateUrl: './control-catalogo.component.html',
  styleUrls: ['./control-catalogo.component.css']
})
export class ControlCatalogoComponent {
  constructor(public auth: AutenticacionService) {}
}