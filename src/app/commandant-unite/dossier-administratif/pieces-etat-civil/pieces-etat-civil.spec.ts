import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesEtatCivil } from './pieces-etat-civil';

describe('PiecesEtatCivil', () => {
  let component: PiecesEtatCivil;
  let fixture: ComponentFixture<PiecesEtatCivil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiecesEtatCivil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiecesEtatCivil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
