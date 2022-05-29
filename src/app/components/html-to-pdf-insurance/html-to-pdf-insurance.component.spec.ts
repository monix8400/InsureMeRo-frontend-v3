import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToPdfInsuranceComponent } from './html-to-pdf-insurance.component';

describe('HtmlToPdfInsuranceComponent', () => {
  let component: HtmlToPdfInsuranceComponent;
  let fixture: ComponentFixture<HtmlToPdfInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlToPdfInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlToPdfInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
