import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCatalogoComponent } from './control-catalogo.component';

describe('ControlCatalogoComponent', () => {
  let component: ControlCatalogoComponent;
  let fixture: ComponentFixture<ControlCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
