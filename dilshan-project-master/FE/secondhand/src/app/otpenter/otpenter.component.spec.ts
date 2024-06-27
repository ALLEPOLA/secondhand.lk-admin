import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpenterComponent } from './otpenter.component';

describe('OtpenterComponent', () => {
  let component: OtpenterComponent;
  let fixture: ComponentFixture<OtpenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtpenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
