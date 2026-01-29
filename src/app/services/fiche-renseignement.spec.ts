import { TestBed } from '@angular/core/testing';

import { FicheRenseignement } from './fiche-renseignement.service';

describe('FicheRenseignement', () => {
  let service: FicheRenseignement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheRenseignement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
