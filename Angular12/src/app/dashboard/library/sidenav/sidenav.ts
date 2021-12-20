import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { KclSidenavDrawer } from './sidenav-drawer';

@Component({
  selector: 'kcl-sidenav',
  exportAs: 'kclSidenav',
  templateUrl: './sidenav-drawer.html',
  // styleUrls: ['./sidenav.scss'],
  host: {
    'class': 'kcl-sidenav-drawer',
    '[class.kcl-sidenav-expand]': 'mode === "side"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class KclSidenav extends KclSidenavDrawer {
  ngOnInit(): void { }
}

@Component({
  selector: 'kcl-sidenav-container',
  exportAs: 'kclSidenavContainer',
  templateUrl: './sidenav.html',
  host: {},
})
export class KclSidenavContainer {
  @ContentChild(KclSidenav, {})
  _allDrawers: QueryList<KclSidenav> = new QueryList<KclSidenav>();
}

@Component({
  selector: 'kcl-sidenav-content',
  template: '<ng-content></ng-content>'
})
export class KclSidenavContent { }