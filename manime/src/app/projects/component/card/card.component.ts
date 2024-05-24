import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/models/anime-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() title?: string;
  @Input() image?: string;
  @Input() score!: number;
  @Input() model!: Anime;

  @Output() cardEventTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  cardClickEventTrigger(model: any) {this.cardEventTrigger.emit(model);}
    
  }


