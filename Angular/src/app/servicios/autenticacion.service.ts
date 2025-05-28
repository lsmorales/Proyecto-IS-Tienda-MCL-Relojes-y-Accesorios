import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DatosInicialesService } from './datos-iniciales.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioActualSubject = new BehaviorSubject<any>(null);
  public usuarioActual$ = this.usuarioActualSubject.asObservable();

  constructor(
    private router: Router,
    private datosIniciales: DatosInicialesService
  ) {
    this.inicializarServicio();
  }

  private inicializarServicio(): void {
    // Cargamos el admin por defecto primero
    this.datosIniciales.cargarAdministrador();
    
    // Luego cargamos el usuario activo si existe
    this.cargarUsuarioActivo();
  }

  private cargarUsuarioActivo(): void {
    const usuario = localStorage.getItem('usuarioActivo');
    if (usuario) {
      this.usuarioActualSubject.next(JSON.parse(usuario));
    }
  }

  // Resto de los métodos permanecen igual...
  iniciarSesion(usuario: string, contrasena: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuarios.find((u: any) => 
      u.usuario === usuario && u.contrasena === contrasena
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
      this.usuarioActualSubject.next(usuarioEncontrado);
      return true;
    }
    return false;
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuarioActivo');
    this.usuarioActualSubject.next(null);
    this.router.navigate(['/']);
  }

  estaAutenticado(): boolean {
    return this.usuarioActualSubject.value !== null;
  }

  esAdmin(): boolean {
    return this.usuarioActualSubject.value?.rol === 'admin';
  }

  getUsuarioActual(): any {
    return this.usuarioActualSubject.value;
  }
}