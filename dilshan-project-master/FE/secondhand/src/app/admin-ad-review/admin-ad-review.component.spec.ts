import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdReviewComponent } from './admin-ad-review.component';

describe('AdminAdReviewComponent', () => {
  let component: AdminAdReviewComponent;
  let fixture: ComponentFixture<AdminAdReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAdReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAdReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
