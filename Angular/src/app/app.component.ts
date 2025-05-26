import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosInicialesService } from './servicios/datos-iniciales.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private datosInicialesService: DatosInicialesService) {
    this.datosInicialesService.cargarAdministrador();
  }
}
