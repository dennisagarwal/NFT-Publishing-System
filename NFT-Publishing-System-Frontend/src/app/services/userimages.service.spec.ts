import { TestBed } from '@angular/core/testing';

import { UserimagesService } from './userimages.service';

describe('UserimagesService', () => {
  let service: UserimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
