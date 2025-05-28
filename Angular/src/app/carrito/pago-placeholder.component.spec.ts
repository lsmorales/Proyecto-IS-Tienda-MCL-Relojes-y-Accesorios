import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPlaceholderComponent } from './pago-placeholder.component';

describe('PagoPlaceholderComponent', () => {
  let component: PagoPlaceholderComponent;
  let fixture: ComponentFixture<PagoPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
