import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {
  constructor(public auth: AutenticacionService) {}

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}