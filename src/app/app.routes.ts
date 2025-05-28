// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ConfirmarPagoComponent } from '../pagos/confirmar-pago/confirmar-pago.component';
import { RegistrarPagoComponent } from '../pagos/registrar-pago/registrar-pago.component';

export const routes: Routes = [
{ path: '', redirectTo: 'registrar-pago', pathMatch: 'full' },
{ path: 'registrar-pago', component: RegistrarPagoComponent },
{ path: 'confirmar-pago', component: ConfirmarPagoComponent },
{ path: 'confirmar-pago', component: ConfirmarPagoComponent }
];
