import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';
import { ProjectComponentModule } from '../projects/component/project-component/project-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ProjectComponentModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule { }
