import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessBlogComponent } from './success-blog.component';

describe('SuccessBlogComponent', () => {
  let component: SuccessBlogComponent;
  let fixture: ComponentFixture<SuccessBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
