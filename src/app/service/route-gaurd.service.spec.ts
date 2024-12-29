import { TestBed } from '@angular/core/testing';

import { RoutGaurdService } from './route-gaurd.service';

describe('RouteGaurdService', () => {
  let service: RoutGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
