import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    usuarios.push({
      usuario: 'admin',
      correo: 'admin@tienda.com',
      contrasena: 'admin123',
      rol: 'admin'
    });

    const usuarioEncontrado = usuarios.find((u: any) =>
      u.usuario === this.usuario && u.contrasena === this.contrasena
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
      if (usuarioEncontrado.rol === 'admin') {
        this.router.navigate(['/catalogo/admin']);
      } else {
        this.router.navigate(['/catalogo/usuario']);
      }
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }
}
