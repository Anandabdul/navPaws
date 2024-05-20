import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAdminComponent } from './volunteer-admin.component';

describe('VolunteerAdminComponent', () => {
  let component: VolunteerAdminComponent;
  let fixture: ComponentFixture<VolunteerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
