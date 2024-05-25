import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
  user = {
    username: 'Username',
    description: 'Share a brief description of yourself',
    address: ''
  };
  editingUsername = false;
  editingDescription = false;

  constructor(
    private actionSheetCtrl: ActionSheetController,

    private platform: Platform
  ) { }
  async changeAvatar() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Avatar Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  editUsername() {
    this.editingUsername = true;
  }

  saveUsername() {
    this.editingUsername = false;
  }

  editDescription() {
    this.editingDescription = true;
  }

  saveDescription() {
    this.editingDescription = false;
  }

  locate() {
  
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
     this.user.address = `${position.coords.latitude}, ${position.coords.longitude}`;
     });
    }
  }
}
