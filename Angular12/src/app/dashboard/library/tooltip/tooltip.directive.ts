import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgTemplateOutlet } from '@angular/common';
import {
  ComponentRef,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Input, OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('tooltip') tooltipText: string = '';
  private overlayRef!: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'end',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -8
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show(): void {
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
    tooltipRef.instance.tooltipText = this.tooltipText;
  }

  @HostListener('mouseout')
  hide(): void {
    this.overlayRef.detach();
  }
}

@Directive({
  selector: '[kclSidenavTooltip]'
})
export class KclSidenavTooltipDirective {
  @Input('tooltip') tooltipText: string = '';
  @Input() placement: string = '';
  @Input() delay: number = 0;
  tooltip: HTMLElement | null = null;
  offset: number = 10;

  @Input('specifyWidth') tooltipLeft: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.tooltip) {
      this.show();
    }
  }
  show(): void {
    if (document.body.querySelector('kcl-sidenav')?.classList.contains('close')) {
      this.create();
      this.setPosition();
      this.renderer.addClass(this.tooltip, 'kcl-tooltip-show');
    }
  }

  @HostListener('mouseout')
  onMouseLeave(): void {
    if (this.tooltip) {
      this.hide();
    }
  }
  hide(): void {
    this.renderer.removeClass(this.tooltip, 'kcl-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, this.delay);
  }

  create(): void {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipText));
    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'kcl-tooltip');
    this.renderer.addClass(this.tooltip, `kcl-tooltip-${this.placement}`);
  }

  setPosition(): void {
    const hostPosition = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPosition = this.tooltip?.getBoundingClientRect();

    let top, left;
    if (this.placement === 'right') {
      top = hostPosition.top + (hostPosition.height - tooltipPosition!.height) / 2;
      if (this.tooltipLeft === 0) {
        left = hostPosition.right + this.offset;
      }
      else {
        left = this.tooltipLeft + this.offset;
      }
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}