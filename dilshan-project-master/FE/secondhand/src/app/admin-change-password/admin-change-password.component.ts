import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  adminId: string | null = localStorage.getItem('admin_id');

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  async changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.snackBar.open('Passwords do not match.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    if (!this.adminId) {
      this.snackBar.open('Invalid Admin ID.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/admin/change-password  ', {
        admin_id: this.adminId,
        new_password: this.newPassword
      });

      this.snackBar.open('Password changed successfully.', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });

      localStorage.removeItem('admin_id');
      this.router.navigate(['/']);
    } catch (error) {
      this.snackBar.open('Failed to change password. Please try again.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
}
