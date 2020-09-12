import { TestBed } from '@angular/core/testing';

import { SpeedttsService } from './speedtts.service';

describe('SpeedttsService', () => {
  let service: SpeedttsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedttsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
