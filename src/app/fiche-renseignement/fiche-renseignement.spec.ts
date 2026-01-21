import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheRenseignement } from './fiche-renseignement';

describe('FicheRenseignement', () => {
  let component: FicheRenseignement;
  let fixture: ComponentFixture<FicheRenseignement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheRenseignement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheRenseignement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
