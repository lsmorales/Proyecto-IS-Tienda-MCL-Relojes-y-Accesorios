import { Component } from '@angular/core';
import { ControlHeaderComponent } from '../../gestion-header/control-header/control-header.component';
import { ControlCatalogoComponent } from '../../gestion-catalogo/control-catalogo/control-catalogo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-pagina-main',
  standalone: true,
  imports: [CommonModule, ControlHeaderComponent, ControlCatalogoComponent],
  templateUrl: './control-pagina-main.component.html',
  styleUrls: ['./control-pagina-main.component.css']
})
export class ControlPaginaMainComponent {}