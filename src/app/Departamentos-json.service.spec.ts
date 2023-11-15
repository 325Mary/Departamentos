import { TestBed } from '@angular/core/testing';

import { DepartamentosJsonService } from './Departamentos-json.service';

describe('DepartamentosJsonService', () => {
  let service: DepartamentosJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentosJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
