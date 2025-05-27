import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosInicialesService } from './servicios/datos-iniciales.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CatalogoClienteComponent } from './gestion-catalogo/catalogo-clientes/catalogo-cliente/catalogo-cliente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CatalogoClienteComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private datosInicialesService: DatosInicialesService) {
    this.datosInicialesService.cargarAdministrador();
  }
  title = 'Proyecto-IS-Tienda-MCL-Relojes-y-Accesorios';
}