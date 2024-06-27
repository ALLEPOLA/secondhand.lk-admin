import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  userEmail: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  requestOtpCode() {
    this.errorMessage = '';

    if (!this.isValidEmail(this.userEmail)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    axios.post('http://localhost:8000/forget-password', {
      email: this.userEmail
    })
    .then(response => {
      console.log('OTP request successful', response.data);
      localStorage.setItem('email', this.userEmail)
      this.router.navigate(['/enterotp']);
      
    })
    .catch(error => {
      console.error('Error requesting OTP:', error);
      if (error.response && error.response.data && error.response.data.error) {
        this.errorMessage = error.response.data.error;
      } else {
        this.errorMessage = 'Error requesting OTP. Please try again later.';
      }
    });
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
}
