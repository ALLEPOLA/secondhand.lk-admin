import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
  constructor(private router: Router, private snackBar: MatSnackBar) {}
  async logout(){
    console.log("called")
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
