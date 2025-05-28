import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEliminadosComponent } from './productos-eliminados.component';

describe('ProductosEliminadosComponent', () => {
  let component: ProductosEliminadosComponent;
  let fixture: ComponentFixture<ProductosEliminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosEliminadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosEliminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
