import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptAdsComponent } from './admin-accept-ads.component';

describe('AdminAcceptAdsComponent', () => {
  let component: AdminAcceptAdsComponent;
  let fixture: ComponentFixture<AdminAcceptAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAcceptAdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAcceptAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
