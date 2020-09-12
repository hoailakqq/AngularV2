import { TestBed } from '@angular/core/testing';

import { GetDataserviesService } from './get-dataservies.service';

describe('GetDataserviesService', () => {
  let service: GetDataserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
