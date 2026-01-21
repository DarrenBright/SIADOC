import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFiches } from './liste-fiches';

describe('ListeFiches', () => {
  let component: ListeFiches;
  let fixture: ComponentFixture<ListeFiches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFiches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFiches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
