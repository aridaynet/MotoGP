import { TestBed } from '@angular/core/testing';

import { MotogpService } from './motogp.service';

describe('MotogpService', () => {
  let service: MotogpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotogpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
