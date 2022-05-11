import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceDComponent } from './create-insurance-d.component';

describe('CreateInsuranceDiComponent', () => {
  let component: CreateInsuranceDComponent;
  let fixture: ComponentFixture<CreateInsuranceDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
