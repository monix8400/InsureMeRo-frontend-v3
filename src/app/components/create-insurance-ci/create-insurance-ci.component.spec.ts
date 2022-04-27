import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceCIComponent } from './create-insurance-ci.component';

describe('CreateInsuranceCIComponent', () => {
  let component: CreateInsuranceCIComponent;
  let fixture: ComponentFixture<CreateInsuranceCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
