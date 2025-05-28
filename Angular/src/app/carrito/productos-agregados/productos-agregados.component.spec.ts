import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAgregadosComponent } from './productos-agregados.component';

describe('ProductosAgregadosComponent', () => {
  let component: ProductosAgregadosComponent;
  let fixture: ComponentFixture<ProductosAgregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosAgregadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosAgregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
