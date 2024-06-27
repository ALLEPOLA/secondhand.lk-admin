import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCountByLocationComponent } from './ad-count-by-location.component';

describe('AdCountByLocationComponent', () => {
  let component: AdCountByLocationComponent;
  let fixture: ComponentFixture<AdCountByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdCountByLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdCountByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
