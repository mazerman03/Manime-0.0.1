import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ModelPageComponent } from '../model-page/model-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileavatarComponent } from '../profileavatar/profileavatar.component';
import { ModalLandingComponent } from '../modal-landing/modal-landing.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';



@NgModule({
  declarations: [CardComponent, ModelPageComponent, ProfileavatarComponent, ModalLandingComponent, CustomInputComponent],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CardComponent, ModelPageComponent, ProfileavatarComponent, ModalLandingComponent, FormsModule, ReactiveFormsModule, CustomInputComponent],
})
export class ProjectComponentModule { }
