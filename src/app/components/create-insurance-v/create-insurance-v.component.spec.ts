import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceVComponent } from './create-insurance-v.component';

describe('CreateInsuranceVComponent', () => {
  let component: CreateInsuranceVComponent;
  let fixture: ComponentFixture<CreateInsuranceVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
