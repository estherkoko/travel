import { TestBed, inject } from '@angular/core/testing';

import { AlegnaPlacesService } from './alegna-places.service';

describe('AlegnaPlacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlegnaPlacesService]
    });
  });

  it('should be created', inject([AlegnaPlacesService], (service: AlegnaPlacesService) => {
    expect(service).toBeTruthy();
  }));
});
