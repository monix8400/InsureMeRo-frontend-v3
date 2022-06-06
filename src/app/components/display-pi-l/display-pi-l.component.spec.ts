import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPiLComponent } from './display-pi-l.component';

describe('DisplayPiLComponent', () => {
  let component: DisplayPiLComponent;
  let fixture: ComponentFixture<DisplayPiLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPiLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPiLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
