import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAdCountChartComponent } from './daily-ad-count-chart.component';

describe('DailyAdCountChartComponent', () => {
  let component: DailyAdCountChartComponent;
  let fixture: ComponentFixture<DailyAdCountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyAdCountChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyAdCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
