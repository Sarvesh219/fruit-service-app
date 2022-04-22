import { TestBed } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitServiceService', () => {
  let service: FruitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
