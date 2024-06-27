import { Component } from '@angular/core';
import axios from 'axios';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpenter',
  templateUrl: './otpenter.component.html',
  styleUrls: ['./otpenter.component.scss']
})
export class OtpenterComponent {
  otp: string = '';
  userEmail: string = localStorage.getItem('email') || '';

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, ''); // Remove non-digit characters

    this.otp = value;

    if (value.length > 6) {
      this.otp = value.slice(0, 6); // Ensure the input length does not exceed 6 digits
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && input.value.length === 0) {
      event.preventDefault(); // Prevent default behavior when input is empty
    }
  }

  submitOtp() {
    const otpCode = this.otp;
    console.log(otpCode);
    if (otpCode.length === 6) {
      axios.post('http://localhost:8000/verify-otp', {
        email: this.userEmail,
        otp: otpCode
      })
      .then(response => {
        this.snackBar.open('OTP verification successful.', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/resetpassword']);
      })
      .catch(error => {
        let errorMessage = 'Error verifying OTP. Please try again later.';
        if (error.response && error.response.data) {
          errorMessage = error.response.data;
        }
        this.snackBar.open(errorMessage, 'Close', {
          duration: 3000,
          panelClass: ['snack-bar-error']
        });
      });
    } else {
      this.snackBar.open('Please enter a valid OTP.', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar-warning']
      });
    }
  }
}
