import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceDListComponent } from './create-insurance-d-list.component';

describe('CreateInsuranceDListComponent', () => {
  let component: CreateInsuranceDListComponent;
  let fixture: ComponentFixture<CreateInsuranceDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsuranceDListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsuranceDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
