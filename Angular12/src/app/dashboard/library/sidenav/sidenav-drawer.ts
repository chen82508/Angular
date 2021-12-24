import {
  AfterContentChecked,
  Component,
  ContentChild,
  ContentChildren,
  InjectionToken,
  Input,
  QueryList,
} from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';

export type KclDrawerToggleResult = 'open' | 'close';

/** Drawer and SideNav display modes. */
export type KclDrawerMode = 'over' | 'push' | 'side';

export const KCL_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken<boolean>(
  'KCL_DRAWER_DEFAULT_AUTOSIZE',
  {
    providedIn: 'root',
    factory: KCL_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
  },
);

export function KCL_DRAWER_DEFAULT_AUTOSIZE_FACTORY(): boolean { return false; }

export const KCL_DRAWER_CONTAINER = new InjectionToken('KCL_DRAWER_CONTAINER');


@Component({
  selector: 'kcl-drawer-content',
  template: '<ng-content></ng-content>',
})
export class KclDrawerContent {}

@Component({
  selector: 'kcl-drawer',
  exportAs: 'kclDrawer',
  templateUrl: 'sidenav-drawer.html',
  host: {
    'class': 'kcl-sidenav-drawer',
    '[class.kcl-sidenav-expand]': 'mode === "side"'
  },
})
export class KclDrawer implements AfterContentChecked {
  private _enableAnimations: boolean = false;
  //#region Mode of the drawer.
  @Input()
  get mode(): KclDrawerMode {
    return this._drawerMode;
  }
  set mode(value: KclDrawerMode) {
    this._drawerMode = value;
  }
  private _drawerMode: KclDrawerMode = 'side';
  //#endregion

  constructor(
    private _platform: Platform,
  ) {}

  ngAfterContentChecked(): void {
    if (this._platform.isBrowser) {
      this._enableAnimations = true;
    }
  }
}

@Component({
  selector: 'kcl-drawer-container',
  exportAs: 'kclDrawerContainer',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: KCL_DRAWER_CONTAINER,
      useExisting: KclDrawerContainer,
    },
  ]
})
export class KclDrawerContainer {
  @ContentChildren(KclDrawer, {
    descendants: true,
  })
  _allDrawers: QueryList<KclDrawer> = new QueryList<KclDrawer>();

  @ContentChild(KclDrawerContent) _content: KclDrawerContent | undefined;

  readonly _contentMarginChanges = new Subject<{left: number | null; right: number | null}>();
}





@Component({
  selector: 'kcl-logo-drawer',
  exportAs: 'kclLogoDrawer',
  templateUrl: 'sidenav-drawer.html',
})
export class KclLogoDrawer {}

@Component({
  selector: 'kcl-list-item-drawer',
  exportAs: 'kclListItemDrawer',
  templateUrl: 'sidenav-drawer.html'
})
export class KclListItemDrawer {}

@Component({
  selector: 'kcl-profile-drawer',
  exportAs: 'kclProfileDrawer',
  templateUrl: 'sidenav-drawer.html'
})
export class KclProfileDrawer {}