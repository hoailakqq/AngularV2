import { TestBed } from '@angular/core/testing';

import { GetAPIService } from './get-api.service';

describe('GetAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAPIService = TestBed.get(GetAPIService);
    expect(service).toBeTruthy();
  });
});
