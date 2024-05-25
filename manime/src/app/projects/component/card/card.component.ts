  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  import { Anime } from 'src/models/anime-data.model';
import { JikanService } from '../../api/service/jikan.service';
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



  constructor(private JikanService: JikanService) { }

  ngOnInit() {
    this.cardEventTrigger.emit(this.model);
  }

  

  async openModal(modelItem: any) {
    this.cardEventTrigger.emit(this.model);
    await this.JikanService.presentModal(modelItem);
  }
}

