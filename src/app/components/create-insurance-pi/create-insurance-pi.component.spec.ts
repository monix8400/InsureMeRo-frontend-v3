import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsurancePIComponent } from './create-insurance-pi.component';

describe('CreateInsurancePIComponent', () => {
  let component: CreateInsurancePIComponent;
  let fixture: ComponentFixture<CreateInsurancePIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsurancePIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsurancePIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
