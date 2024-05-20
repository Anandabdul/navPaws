import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueAdminComponent } from './rescue-admin.component';

describe('RescueAdminComponent', () => {
  let component: RescueAdminComponent;
  let fixture: ComponentFixture<RescueAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescueAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescueAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
