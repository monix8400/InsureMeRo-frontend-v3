import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInsurancePriceComponent } from './show-insurance-price.component';

describe('InsuranceComponent', () => {
  let component: ShowInsurancePriceComponent;
  let fixture: ComponentFixture<ShowInsurancePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInsurancePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInsurancePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
