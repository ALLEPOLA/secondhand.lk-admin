import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-profilesetting',
  templateUrl: './profilesetting.component.html',
  styleUrls: ['./profilesetting.component.scss']
})
export class ProfilesettingComponent implements OnInit {
  adminData = {
    user_name: '',
    email: ''
  };

  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  isEditingName = false;
  isEditingEmail = false;
  isChangingPassword = false;
  isFormEdited = false;
  message = '';
  isError = false;

  showOldPassword = false;
  showNewPassword = false;
  showConfirmNewPassword = false;

  ngOnInit() {
    this.fetchAdminData();
  }

  fetchAdminData() {
    const adminId = localStorage.getItem('admin_id');
    axios.get(`http://localhost:8000/admin-data/${adminId}`)
      .then(response => {
        this.adminData = response.data[0];
      })
      .catch(error => {
        console.error('Error fetching admin data:', error);
      });
  }

  toggleEdit(field: string) {
    switch (field) {
      case 'name':
        this.isEditingName = !this.isEditingName;
        if (!this.isEditingName) this.isFormEdited = true;
        break;
      case 'email':
        this.isEditingEmail = !this.isEditingEmail;
        if (!this.isEditingEmail) this.isFormEdited = true;
        break;
    }
  }

  resetForm() {
    this.isEditingName = false;
    this.isEditingEmail = false;
    this.isFormEdited = false;
    this.fetchAdminData();
  }

  updateAdminData() {
    const adminId = localStorage.getItem('admin_id');
    axios.put(`http://localhost:8000/admin-data-credentials`, { adminId, ...this.adminData })
      .then(response => {
        this.message = 'Admin data updated successfully';
        this.isError = false;
        this.isFormEdited = false;
      })
      .catch(error => {
        this.message = 'Error updating admin data';
        this.isError = true;
        console.error('Error updating admin data:', error);
      });
  }

  toggleChangePassword() {
    this.isChangingPassword = !this.isChangingPassword;
    if (this.isChangingPassword) {
      this.passwordData = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      };
      this.message = ''; // Clear any existing messages
      this.isError = false;
    }
  }

  toggleShowPassword(field: string) {
    switch (field) {
      case 'old':
        this.showOldPassword = !this.showOldPassword;
        break;
      case 'new':
        this.showNewPassword = !this.showNewPassword;
        break;
      case 'confirm':
        this.showConfirmNewPassword = !this.showConfirmNewPassword;
        break;
    }
  }

  changePassword() {
    if (this.passwordData.newPassword !== this.passwordData.confirmNewPassword) {
      this.message = 'New passwords do not match';
      this.isError = true;
      return;
    }

    const adminId = localStorage.getItem('admin_id');
    axios.put(`http://localhost:8000/change-password`, {
      adminId,
      oldPassword: this.passwordData.oldPassword,
      newPassword: this.passwordData.newPassword
    })
      .then(response => {
        this.message = 'Password changed successfully';
        this.isError = false;
        this.toggleChangePassword();
      })
      .catch(error => {
        this.message = 'Error changing password';
        this.isError = true;
        console.error('Error changing password:', error);
      });
  }
}
