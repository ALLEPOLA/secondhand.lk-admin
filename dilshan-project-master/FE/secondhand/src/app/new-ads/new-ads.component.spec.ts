import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdsComponent } from './new-ads.component';

describe('NewAdsComponent', () => {
  let component: NewAdsComponent;
  let fixture: ComponentFixture<NewAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
