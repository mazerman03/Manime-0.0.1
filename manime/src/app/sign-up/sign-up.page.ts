import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  signupData = { email: '', username: '', password: '', confirmPassword: '' };

  constructor(private navCtrl: NavController) { } 
  signup() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    // Your signup logic here
    console.log('Signup data', this.signupData);
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login'); 
  }
}
