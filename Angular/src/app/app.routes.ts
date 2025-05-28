import { Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },

  // ...otras rutas
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.component').then(m => m.CarritoComponent)
  },
  {
    path: 'pagos',
    loadComponent: () => import('./carrito/pago-placeholder.component').then(m => m.PagoPlaceholderComponent)
  }

];
