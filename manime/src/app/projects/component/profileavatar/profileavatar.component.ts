import { Component } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profileavatar',
  templateUrl: 'profileavatar.component.html',
  styleUrls: ["profileavatar.component.scss"]
})
export class ProfileavatarComponent {
  presentingElement: any;

  private canDismissOverride = false;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onDismissChange(canDismiss: boolean) {
    this.canDismissOverride = canDismiss;
  }

  onWillPresent() {
    this.canDismissOverride = false;
  }

  canDismiss = async () => {
    if (this.canDismissOverride) {
      return true;
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}