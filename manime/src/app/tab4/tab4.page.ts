import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileChooser}  from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  profileImage: string = 'assets/default-avatar.png'; 
  user = {
    username: 'John Doe', 
    description: 'Comparte sobre ti con una breve descripcion!' 
  };
  editingUsername = false;
  editingDescription = false;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fileChooser: FileChooser,
    private platform: Platform,
  ) { }

  async changeAvatar() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Avatar Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.selectImage(PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.selectImage(PictureSourceType.CAMERA);
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

  selectImage(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.profileImage = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        console.log('Camera issue: ' + err);
      }
    );
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
}
