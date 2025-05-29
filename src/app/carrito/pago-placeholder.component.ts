import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pago-placeholder',
  imports: [CommonModule],
  template: `
    <div style="padding: 2rem; text-align: center;">
      <h2>Página de pagos en construcción</h2>
      <p>Esta función estará disponible pronto.</p>
    </div>
  `
})
export class PagoPlaceholderComponent {}
