import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ModelPageComponent } from '../model-page/model-page.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardComponent, ModelPageComponent],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule
  ],
  exports: [CardComponent, ModelPageComponent]
})
export class ProjectComponentModule { }
