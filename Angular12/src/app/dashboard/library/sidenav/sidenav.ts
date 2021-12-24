import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import {
  KclDrawer,
  KclDrawerContainer,
  KclDrawerContent,
} from './sidenav-drawer';

@Component({
  selector: 'kcl-sidenav-content',
  template: '<ng-content></ng-content>',
  host: {
    'class': 'kcl-sidenav-content'
  }
})
export class KclSidenavContent extends KclDrawerContent {}

@Component({
  selector: 'kcl-sidenav',
  exportAs: 'kclSidenav',
  templateUrl: './sidenav-drawer.html',
  host: {
    'class': 'kcl-sidenav-drawer',
    '[class.kcl-sidenav-expand]': 'mode === "side"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class KclSidenav extends KclDrawer {
  ngOnInit(): void { }
}

@Component({
  selector: 'kcl-sidenav-container',
  exportAs: 'kclSidenavContainer',
  templateUrl: './sidenav.html',
  host: {},
})
export class KclSidenavContainer extends KclDrawerContainer {
  @ContentChildren(KclSidenav, {
    descendants: true,
  })
  _allDrawers: QueryList<KclSidenav> = new QueryList<KclSidenav>();

  @ContentChild(KclSidenavContent) override _content: KclSidenavContent | undefined;
}