import { TestBed } from '@angular/core/testing';

import { HardcodedeAuthenticationService } from './hardcodede-authentication.service';

describe('HardcodedeAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedeAuthenticationService = TestBed.get(HardcodedeAuthenticationService);
    expect(service).toBeTruthy();
  });
});
