import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlockedAdsComponent } from './admin-blocked-ads.component';

describe('AdminBlockedAdsComponent', () => {
  let component: AdminBlockedAdsComponent;
  let fixture: ComponentFixture<AdminBlockedAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBlockedAdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBlockedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
