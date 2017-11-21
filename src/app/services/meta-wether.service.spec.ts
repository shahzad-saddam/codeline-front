import { TestBed, inject } from '@angular/core/testing';

import { MetaWetherService } from './meta-wether.service';

describe('MetaWetherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaWetherService]
    });
  });

  it('should be created', inject([MetaWetherService], (service: MetaWetherService) => {
    expect(service).toBeTruthy();
  }));
});
