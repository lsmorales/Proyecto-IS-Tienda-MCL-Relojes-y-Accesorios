import { TestBed } from '@angular/core/testing';

import { DatosInicialesService } from './datos-iniciales.service';

describe('DatosInicialesService', () => {
  let service: DatosInicialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosInicialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
