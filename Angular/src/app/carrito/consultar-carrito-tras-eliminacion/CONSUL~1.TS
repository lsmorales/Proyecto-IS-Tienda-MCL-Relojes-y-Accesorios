import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCarritoTrasEliminacionComponent } from './consultar-carrito-tras-eliminacion.component';

describe('ConsultarCarritoTrasEliminacionComponent', () => {
  let component: ConsultarCarritoTrasEliminacionComponent;
  let fixture: ComponentFixture<ConsultarCarritoTrasEliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarCarritoTrasEliminacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCarritoTrasEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
