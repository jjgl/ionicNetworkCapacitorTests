import { TestBed } from '@angular/core/testing';

import { NetstatusService } from './netstatus.service';

describe('NetstatusService', () => {
  let service: NetstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
