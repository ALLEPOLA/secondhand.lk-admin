import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  emailPlaceholder: string = 'E-mail';
  passwordPlaceholder: string = 'Password';
  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  emailValid: boolean = true;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  onFocus(field: string) {
    if (field === 'email') {
      this.emailPlaceholder = '';
    } else if (field === 'password') {
      this.passwordPlaceholder = '';
    }
  }

  onBlur(field: string) {
    if (field === 'email' && !this.emailPlaceholder) {
      this.emailPlaceholder = 'E-mail';
    } else if (field === 'password' && !this.passwordPlaceholder) {
      this.passwordPlaceholder = 'Password';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValid = emailPattern.test(this.email);
  }

  async login() {
    this.validateEmail();
    
    if (!this.emailValid) {
      this.snackBar.open('Please enter a valid email.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/admin/login', {
        email: this.email,
        password: this.password
      });

      const { token, admin_id, message } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('admin_id', admin_id)
        this.router.navigate(['/admin/dashboard']);
      } else if (message) {
        localStorage.setItem('admin_id', admin_id);
        console.log(message)
        this.router.navigate(['/change-password']);
      }
    } catch (error) {
      this.snackBar.open('Login failed. Please check your credentials and try again.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
}
