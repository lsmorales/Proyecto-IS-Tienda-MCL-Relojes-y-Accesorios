import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosInicialesService {
  constructor() {}

  cargarAdministrador() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const existeAdmin = usuarios.some(
      (u: any) => u.usuario === 'admin' && u.rol === 'admin'
    );

    if (!existeAdmin) {
      usuarios.push({
        usuario: 'admin',
        correo: 'admin@tienda.com',
        contrasena: 'admin123',
        rol: 'admin',
      });

      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      console.log('Administrador cargado automáticamente');
    }
  }
}
