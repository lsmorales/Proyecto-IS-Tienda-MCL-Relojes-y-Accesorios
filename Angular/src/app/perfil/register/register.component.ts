import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: string = '';
  correo: string = '';
  contrasena: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  registrar() {
  
      if (!this.usuario || !this.correo || !this.contrasena) {
      this.mensaje = 'Por favor, completa todos los campos.';
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const yaExiste = usuarios.find((u: any) =>
      u.usuario === this.usuario || u.correo === this.correo
    );

    if (yaExiste) {
      this.mensaje = 'El usuario o correo ya están registrados.';
      return;
    }

    const nuevoUsuario = {
      usuario: this.usuario,
      correo: this.correo,
      contrasena: this.contrasena,
      rol: 'usuario',
      carrito: []
    };


    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.mensaje = 'Registro exitoso. Puedes iniciar sesión.';
    setTimeout(() => this.router.navigate(['/login']), 2000);
  }

}
