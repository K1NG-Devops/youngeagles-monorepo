import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      this.successMessage = '';
      return;
    }

    // Simulate login logic (replace with real auth later)
    if (this.email === 'admin@example.com' && this.password === 'password') {
      this.successMessage = 'Login successful!';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid email or password.';
      this.successMessage = '';
    }
  }
}