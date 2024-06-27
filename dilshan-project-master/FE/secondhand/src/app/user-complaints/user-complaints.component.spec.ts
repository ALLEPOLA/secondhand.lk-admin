import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComplaintsComponent } from './user-complaints.component';

describe('UserComplaintsComponent', () => {
  let component: UserComplaintsComponent;
  let fixture: ComponentFixture<UserComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComplaintsComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch complaints', () => {
    spyOn(component, 'fetchComplaints').and.callThrough();
    component.ngOnInit();
    expect(component.fetchComplaints).toHaveBeenCalled();
  });

  it('should show popup when showPopup is called', () => {
    component.showPopup();
    expect(component.isPopupVisible).toBeTrue();
  });

  it('should hide popup when closePopup is called', () => {
    component.closePopup();
    expect(component.isPopupVisible).toBeFalse();
  });

  it('should ban user and close popup when banUser is called', () => {
    spyOn(window, 'alert');
    component.banUser();
    expect(window.alert).toHaveBeenCalledWith('User has been banned.');
    expect(component.isPopupVisible).toBeFalse();
  });
});
