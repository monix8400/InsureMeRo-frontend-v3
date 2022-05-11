import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceChooseTypePiComponent } from './create-insurance-choose-type-pi.component';

describe('CreateInsuranceChooseTypePiComponent', () => {
  let component: CreateInsuranceChooseTypePiComponent;
  let fixture: ComponentFixture<CreateInsuranceChooseTypePiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceChooseTypePiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceChooseTypePiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
