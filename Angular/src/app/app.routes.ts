import { Routes } from '@angular/router';
import { LoginComponent } from './perfil/login/login.component';
import { RegisterComponent } from './perfil/register/register.component';
import { ControlPaginaMainComponent } from './gestion-pagina-main/control-pagina-main/control-pagina-main.component';
import { CarritoComponent } from './gestion-carrito/carrito/carrito.component'; // Importa el componente del carrito
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { RegistrarPagoComponent } from './pagos/registrar-pago/registrar-pago.component';

export const routes: Routes = [
  { path: '', component: ControlPaginaMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'registrar-pago', component: RegistrarPagoComponent },
  { 
    path: 'admin', 
    component: ControlPaginaMainComponent,
    canActivate: [authGuard, adminGuard] 
  }, 
  { 
    path: 'carrito', 
    component: CarritoComponent,
    canActivate: [authGuard] // Solo usuarios autenticados
  },
  { path: '**', redirectTo: '' }
];