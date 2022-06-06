import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAccountInfoComponent } from './saved-account-info.component';

describe('SavedAccountInfoComponent', () => {
  let component: SavedAccountInfoComponent;
  let fixture: ComponentFixture<SavedAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedAccountInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
