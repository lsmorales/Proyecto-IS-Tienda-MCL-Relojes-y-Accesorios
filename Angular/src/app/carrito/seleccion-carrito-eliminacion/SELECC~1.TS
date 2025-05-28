import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCarritoEliminacionComponent } from './seleccion-carrito-eliminacion.component';

describe('SeleccionCarritoEliminacionComponent', () => {
  let component: SeleccionCarritoEliminacionComponent;
  let fixture: ComponentFixture<SeleccionCarritoEliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionCarritoEliminacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionCarritoEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
