import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVComponent } from './display-v.component';

describe('DisplayVComponent', () => {
  let component: DisplayVComponent;
  let fixture: ComponentFixture<DisplayVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
