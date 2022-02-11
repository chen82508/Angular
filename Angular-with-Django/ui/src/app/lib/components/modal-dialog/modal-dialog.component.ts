import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'lib-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalDialogComponent {

  @Input()
  isOpen: boolean = false;

  @Output()
  isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  title: string = "";

  onClose(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
