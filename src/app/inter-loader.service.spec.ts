import { TestBed } from '@angular/core/testing';

import { InterLoaderService } from './inter-loader.service';

describe('InterLoaderService', () => {
  let service: InterLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
