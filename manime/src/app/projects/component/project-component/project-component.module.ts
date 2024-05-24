import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ModelPageComponent } from '../model-page/model-page.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileavatarComponent } from '../profileavatar/profileavatar.component';
import { ModalLandingComponent } from '../modal-landing/modal-landing.component';



@NgModule({
  declarations: [CardComponent, ModelPageComponent, ProfileavatarComponent, ModalLandingComponent],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule
  ],
  exports: [CardComponent, ModelPageComponent, ProfileavatarComponent, ModalLandingComponent],
})
export class ProjectComponentModule { }
