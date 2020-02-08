import { TestBed } from '@angular/core/testing';

import { OwService } from './ow.service';

describe('OwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwService = TestBed.get(OwService);
    expect(service).toBeTruthy();
  });
});
