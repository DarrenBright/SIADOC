import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerDossier } from './creer-dossier';

describe('CreerDossier', () => {
  let component: CreerDossier;
  let fixture: ComponentFixture<CreerDossier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerDossier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerDossier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
