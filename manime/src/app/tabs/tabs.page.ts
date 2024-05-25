import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../projects/api/service/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  navigateToAccount() {
    if (this.authService.checkLoginStatus()) {
      this.navCtrl.navigateRoot('/tabs/tab4');
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }
}

