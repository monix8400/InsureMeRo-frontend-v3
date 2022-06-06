import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPiIComponent } from './display-pi-i.component';

describe('DisplayPiIComponent', () => {
  let component: DisplayPiIComponent;
  let fixture: ComponentFixture<DisplayPiIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPiIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPiIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
