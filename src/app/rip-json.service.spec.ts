import { TestBed } from '@angular/core/testing';

import { RipJSONService } from './rip-json.service';

describe('RipJSONService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RipJSONService = TestBed.get(RipJSONService);
    expect(service).toBeTruthy();
  });
});
