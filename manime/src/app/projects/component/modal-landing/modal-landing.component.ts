import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CheckboxCustomEvent, IonModal } from '@ionic/angular';
@Component({
  selector: 'app-modal-landing',
  templateUrl: './modal-landing.component.html',
  styleUrls: ['./modal-landing.component.scss'],
})
export class ModalLandingComponent {

  @Input() modal!: IonModal;

  @Output() dismissChange = new EventEmitter<boolean>();

  checkboxChanged(event: any) {
    const ev = event as CheckboxCustomEvent;
    const checked = ev.detail.checked;

    this.dismissChange.emit(checked);
  }

}
