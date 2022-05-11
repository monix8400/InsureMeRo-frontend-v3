import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsurancePiIComponent } from './create-insurance-pi-i.component';

describe('CreateInsurancePIComponent', () => {
  let component: CreateInsurancePiIComponent;
  let fixture: ComponentFixture<CreateInsurancePiIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsurancePiIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsurancePiIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
