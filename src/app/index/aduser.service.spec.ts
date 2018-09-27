import { TestBed, inject } from '@angular/core/testing';

import { AduserService } from './aduser.service';

describe('AduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AduserService]
    });
  });

  it('should be created', inject([AduserService], (service: AduserService) => {
    expect(service).toBeTruthy();
  }));
});
