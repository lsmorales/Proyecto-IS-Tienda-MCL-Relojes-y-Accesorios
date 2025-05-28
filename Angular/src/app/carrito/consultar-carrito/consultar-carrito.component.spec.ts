import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCarritoComponent } from './consultar-carrito.component';

describe('ConsultarCarritoComponent', () => {
  let component: ConsultarCarritoComponent;
  let fixture: ComponentFixture<ConsultarCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
