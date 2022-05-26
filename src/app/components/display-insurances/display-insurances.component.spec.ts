import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInsurancesComponent } from './display-insurances.component';

describe('InsurancesComponent', () => {
  let component: DisplayInsurancesComponent;
  let fixture: ComponentFixture<DisplayInsurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayInsurancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
