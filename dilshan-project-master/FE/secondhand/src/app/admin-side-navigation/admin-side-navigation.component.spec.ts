import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideNavigationComponent } from './admin-side-navigation.component';

describe('AdminSideNavigationComponent', () => {
  let component: AdminSideNavigationComponent;
  let fixture: ComponentFixture<AdminSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSideNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
