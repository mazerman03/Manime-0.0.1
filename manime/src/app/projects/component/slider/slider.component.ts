import { Component, EventEmitter, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {
  @Input() sliderInputValue: any;
  @Output() sliderEventTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
