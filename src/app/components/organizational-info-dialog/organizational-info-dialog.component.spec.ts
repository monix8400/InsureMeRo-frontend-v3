import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalInfoDialogComponent } from './organizational-info-dialog.component';

describe('OrganizationalInfoDialogComponent', () => {
  let component: OrganizationalInfoDialogComponent;
  let fixture: ComponentFixture<OrganizationalInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationalInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
