import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { PopupData } from '../../services/popup.service';

import { trigger, style, animate, transition, query, group, animateChild, state } from '@angular/animations';

@Component({
  selector: 'lib-popup-host',
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dropback', [
      transition(':enter', [
        style({ visibility: 'hidden', opacity: 0 }),
        animate('0.64s ease-in-out', style({ visibility: 'visible', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.64s ease-in-out', style({ visibility: 'hidden', opacity: 0 }))
      ])
    ]),
  ]
})
export class PopupHostComponent {

  popups: PopupData[] = [];

  constructor(private readonly _cd: ChangeDetectorRef) { }

  // ngOnInit(): void {
  // }

  update(popups: PopupData[]): void {
    this.popups = popups;
    this._cd.detectChanges();
  }

  isCenter(p: PopupData): boolean {
    return p.overlay &&
      p.rect.left == null &&
      p.rect.right == null &&
      p.rect.top == null &&
      p.rect.bottom == null;
  }

}
