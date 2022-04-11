import { TestBed } from '@angular/core/testing';

import { UserRegistrationServiceService } from './user-registration-service.service';

describe('UserRegistrationServiceService', () => {
  let service: UserRegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
