import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPaginaMainComponent } from './control-pagina-main.component';

describe('ControlPaginaMainComponent', () => {
  let component: ControlPaginaMainComponent;
  let fixture: ComponentFixture<ControlPaginaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPaginaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPaginaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
