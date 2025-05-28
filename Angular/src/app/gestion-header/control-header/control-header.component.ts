import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from '../header2/header2.component';
import { Header3Component } from '../header3/header3.component';
import { RouterModule } from '@angular/router'; // Añade esto

@Component({
  selector: 'app-control-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Añade esto
    HeaderComponent,
    Header2Component,
    Header3Component
  ],
  templateUrl: './control-header.component.html',
  styleUrls: ['./control-header.component.css']
})
export class ControlHeaderComponent {
  constructor(public auth: AutenticacionService) {}
}