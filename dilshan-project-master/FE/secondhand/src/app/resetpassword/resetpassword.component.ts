import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup; // Initialize in ngOnInit
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordsMatch
    });
  }

  passwordsMatch(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  toggleNewPasswordVisibility(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submitForm() {
    if (this.resetPasswordForm && this.resetPasswordForm.valid) {
      const email = localStorage.getItem('email');
      const newPassword = this.resetPasswordForm.get('newPassword')?.value;

      axios.post('http://localhost:8000/reset-password', { email, newPassword })
        .then(response => {
          this.snackBar.open('Password updated successfully.', 'Close', {
            duration: 3000,
            panelClass: ['snack-bar-success']
          });
          localStorage.removeItem('email');
          this.router.navigate(['/']);
        })
        .catch(error => {
          let errorMessage = 'Error updating password. Please try again later.';
          if (error.response && error.response.data) {
            errorMessage = error.response.data;
          }
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            panelClass: ['snack-bar-error']
          });
        });
    } else {
      this.snackBar.open('Please fill out the form correctly.', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar-warning']
      });
    }
  }
}
