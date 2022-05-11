import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsurancePiLComponent } from './create-insurance-pi-l.component';

describe('CreateInsurancePiLComponent', () => {
  let component: CreateInsurancePiLComponent;
  let fixture: ComponentFixture<CreateInsurancePiLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsurancePiLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsurancePiLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
