import { TestBed } from '@angular/core/testing';

import { RequestIntercetionFilterService } from './request-intercetion-filter.service';

describe('RequestIntercetionFilterService', () => {
  let service: RequestIntercetionFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestIntercetionFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
