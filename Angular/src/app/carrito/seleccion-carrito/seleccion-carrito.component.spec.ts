import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCarritoComponent } from './seleccion-carrito.component';

describe('SeleccionCarritoComponent', () => {
  let component: SeleccionCarritoComponent;
  let fixture: ComponentFixture<SeleccionCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
