import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCategoryAnalysisComponent } from './ad-category-analysis.component';

describe('AdCategoryAnalysisComponent', () => {
  let component: AdCategoryAnalysisComponent;
  let fixture: ComponentFixture<AdCategoryAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdCategoryAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdCategoryAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
