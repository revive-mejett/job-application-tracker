import { TestBed } from '@angular/core/testing';

import { RejectiongeneratorService } from './rejectiongenerator.service';

describe('RejectiongeneratorService', () => {
  let service: RejectiongeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectiongeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
