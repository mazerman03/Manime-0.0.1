import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Tab4Page } from './tab4.page';
import { ProjectComponentModule } from '../projects/component/project-component/project-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    ProjectComponentModule,
    LeafletModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
