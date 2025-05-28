import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
  constructor(public auth: AutenticacionService) {}

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}