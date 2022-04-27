import { TestBed } from '@angular/core/testing';

import { HTTPRequestService } from './http-request.service';

describe('HTTPRequestService', () => {
  let service: HTTPRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
