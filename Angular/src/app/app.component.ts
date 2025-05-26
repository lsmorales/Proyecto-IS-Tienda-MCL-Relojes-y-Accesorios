import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatalogoClienteComponent } from './gestion-catalogo/catalogo-clientes/catalogo-cliente/catalogo-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CatalogoClienteComponent],
  templateUrl: './app.component.html',
  styleUrls: [] // Opcional: puedes eliminar esta línea si no usas estilos
})
export class AppComponent {
  title = 'Angular-Prueba';
}