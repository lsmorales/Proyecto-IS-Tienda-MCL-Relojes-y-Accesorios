import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'carrito',
    pathMatch: 'full'
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.component').then(m => m.CarritoComponent)
  },
  {
    path: 'pagos',
    loadComponent: () => import('./carrito/pago-placeholder.component').then(m => m.PagoPlaceholderComponent)
  }
];

