import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { trigger, style, animate, transition, query, group, animateChild, state } from '@angular/animations';

@Component({
  selector: 'lib-animate-dialog',
  templateUrl: './animate-dialog.component.html',
  styleUrls: ['./animate-dialog.component.css'],
  animations: [
    // trigger('dropback', [
    //   transition(':enter', [
    //     style({ visibility: 'hidden', opacity: 0 }),
    //     animate('0.64s ease-in-out', style({ visibility: 'visible', opacity: 1 }))
    //   ]),
    //   transition(':leave', [
    //     animate('0.64s ease-in-out', style({ visibility: 'hidden', opacity: 0 }))
    //   ])
    // ]),
    trigger('dropback', [
      transition(':enter', [
        group([
          query(':self',
            [
              style({ visibility: 'hidden', opacity: 0 }),
              animate('0.64s ease-in-out', style({ visibility: 'visible', opacity: 1 }))
            ]),
          query('@dialog', animateChild()),
        ])
      ]),
      transition(':leave', [
        group([
          query(':self',
            [
              animate('0.64s ease-in-out', style({ visibility: 'hidden', opacity: 0 }))
            ]),
          query('@dialog', animateChild()),
        ])
      ])
    ]),
    trigger('dialog', [
      transition(':enter', [
        style({ bottom: '-100vw', right: '-100vh', transform: 'rotate(32deg)' }),
        animate('0.64s ease-in-out', style({ bottom: 0, right: 0, transform: 'rotate(0)' }))
      ]),
      transition(':leave', [
        animate('0.64s ease-in-out', style({ bottom: '-100vw', right: '-100vh', transform: 'rotate(32deg)' }))
      ])
    ])
  ]
})
export class AnimateDialogComponent implements OnInit {

  @Input()
  visible: boolean = true;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  closable: boolean = true;

  @Input()
  width: number | undefined;
  @Input()
  height: number | undefined;

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.width === undefined) {
      this.width = 720;
    }

    if (this.height === undefined) {
      this.height = 405;
    }
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
