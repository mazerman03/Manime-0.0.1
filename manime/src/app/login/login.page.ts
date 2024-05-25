import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = { email: '', password: '' };

  constructor(private router: Router) { }

  login() {
    // Con firebase despues
    console.log('Login data', this.loginData);
  }

  goToSignup() {
    this.router.navigate(['/sign-up']);
  }

  forgotPassword() {
    // Logica con firebase despues
    console.log('Forgot Password');
  }
}
