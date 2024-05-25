  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  import { Anime } from 'src/models/anime-data.model';
import { JikanService } from '../../api/service/jikan.service';
import { ModalController } from '@ionic/angular';
import { ModelPageComponent } from '../model-page/model-page.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title?: string;
  @Input() image?: string;
  @Input() score!: number;
  @Input() model!: Anime;
  @Input() season?: string;
  @Input() year?: number;
  @Input() synopsis?: string;
 
  @Output() cardEventTrigger: EventEmitter<any> = new EventEmitter();
  @Output() libraryNewAdd: EventEmitter<number> = new EventEmitter();


  constructor(private JikanService: JikanService, private modalController: ModalController) { }

  ngOnInit() {
    this.cardEventTrigger.emit(this.model);
  }

  
/* 
  async openModal(modelItem: any) {
    this.cardEventTrigger.emit(this.model);
    await this.JikanService.presentModal(modelItem);
  } */

/*   async openModal(modelItem: Anime) {
    const modal = await this.modalController.create({
      component: ModelPageComponent,
      componentProps: { modelItemList: modelItem }
    });

    modal.onDidDismiss().then((detail) => {
      if (detail.data) {
        this.libraryNewAdd.emit(detail.data.id);
      }
    });

    return await modal.present();
  } */

  async openModal(modelItem: Anime) {
    const modal = await this.modalController.create({
      component: ModelPageComponent,
      componentProps: { modelItemList: modelItem }
    });
  
    modal.onDidDismiss().then((detail) => {
      if (detail.data) {
        this.libraryNewAdd.emit();
      }
    }).catch((error) => {
      console.error('Error on modal dismiss', error);
    });
  
    return await modal.present();
  }
  
}

