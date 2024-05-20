import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateAdminComponent } from './donate-admin.component';

describe('DonateAdminComponent', () => {
  let component: DonateAdminComponent;
  let fixture: ComponentFixture<DonateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
