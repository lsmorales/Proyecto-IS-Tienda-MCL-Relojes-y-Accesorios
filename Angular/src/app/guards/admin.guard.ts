import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor(private auth: AutenticacionService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.esAdmin()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
