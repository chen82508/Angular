import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'kcl-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', []),
  ],
})
export class TooltipComponent {
  @Input() tooltipText:string = '';
}
