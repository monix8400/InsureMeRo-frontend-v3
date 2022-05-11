import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceChooseDComponent } from './create-insurance-choose-d.component';

describe('CreateInsuranceChooseDComponent', () => {
  let component: CreateInsuranceChooseDComponent;
  let fixture: ComponentFixture<CreateInsuranceChooseDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceChooseDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceChooseDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
