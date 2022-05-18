import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceStepperComponent } from './create-insurance-stepper.component';

describe('CreateInsuranceStepperComponent', () => {
  let component: CreateInsuranceStepperComponent;
  let fixture: ComponentFixture<CreateInsuranceStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
