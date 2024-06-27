import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdStatusAnalysisComponent } from './ad-status-analysis.component';

describe('AdStatusAnalysisComponent', () => {
  let component: AdStatusAnalysisComponent;
  let fixture: ComponentFixture<AdStatusAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdStatusAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdStatusAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
