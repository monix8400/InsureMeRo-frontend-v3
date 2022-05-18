import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseInsuranceDatesComponent } from './choose-insurance-dates.component';

describe('ChooseInsuranceDatesComponent', () => {
  let component: ChooseInsuranceDatesComponent;
  let fixture: ComponentFixture<ChooseInsuranceDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseInsuranceDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseInsuranceDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
