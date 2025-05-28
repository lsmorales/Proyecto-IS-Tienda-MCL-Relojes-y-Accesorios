import { Component } from '@angular/core';
import { HeaderComponent } from './gestion-header/header/header.component';
import { CatalogoClienteComponent } from './gestion-catalogo/catalogo-clientes/catalogo-cliente/catalogo-cliente.component';
import { CatalogoAdministradorComponent } from "./gestion-catalogo/catalogo-administradores/catalogo-administrador/catalogo-administrador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CatalogoAdministradorComponent],
  templateUrl: './app.component.html',
  styleUrls: [] // Opcional: puedes eliminar esta línea si no usas estilos
})
export class AppComponent {
  title = 'Angular-Prueba';
}