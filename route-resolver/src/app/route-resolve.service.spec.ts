import { TestBed } from '@angular/core/testing';

import { RouteResolveService } from './route-resolve.service';

describe('RouteResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteResolveService = TestBed.get(RouteResolveService);
    expect(service).toBeTruthy();
  });
});
