import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewEncapsulation
} from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

export type KclDrawerMode = 'over' | 'push' | 'side';

@Component({
  selector: 'kcl-sidenav-drawer',
  exportAs: 'kclSidenavDrawer',
  templateUrl: 'sidenav-drawer.html',
  host: {
    'class': 'kcl-sidenav-drawer',
    '[class.kcl-sidenav-expand]': 'mode === "side"'
  },
})
export class KclSidenavDrawer {
  //#region Set css by side navigation mode
  @Input()
  get mode(): KclDrawerMode {
    return this._drawerMode;
  }
  set mode(value: KclDrawerMode) {
    this._drawerMode = value;
  }
  private _drawerMode: KclDrawerMode = 'side';
  //#endregion
}

@Component({
  selector: 'kcl-sidenav-logo',
  exportAs: 'kclSidenavLogo',
  templateUrl: 'sidenav-drawer.html',
})
export class KclSidenavLogo { }

@Component({
  selector: 'kcl-sidenav-expand-logo',
  exportAs: 'kclSidenavExpandLogo',
  templateUrl: 'sidenav-drawer.html',
  host: {
    'id': 'kcl-expand-btn',
  },
  styleUrls: ['./sidenav.scss']
})
export class KclSidenavExpandLogo { }


export type KclSidenavListMode = 'unordered' | 'ordered';
export type KclSidenavListItemStructure = 'Responsive' | null;
@Component({
  selector: 'kcl-sidenav-list',
  exportAs: 'kclSidenavList',
  templateUrl: 'sidenav-list.html',
  host: {},
})
export class KclSidenavList {
  //#region Get input list mode.
  @Input()
  get mode(): KclSidenavListMode {
    return this._listMode;
  }
  set mode(value: KclSidenavListMode) {
    this._listMode = value;
  }
  _listMode: KclSidenavListMode = 'unordered';
  //#endregion

  //#region Set list items
  @Input()
  get items(): any {
    return this._listItems;
  }
  set items(value: any) {
    this._listItems = value;
  }
  public _listItems: any = [];
  //#endregion

  ngOnInit() {
    console.log(this._listItems);
  }
}

@Component({
  selector: 'kcl-sidenav-profile',
  exportAs: 'kclSidenavProfile',
  templateUrl: 'sidenav-drawer.html',
})
export class KclSidenavProfile { }


// @Component({
//   selector: 'mat-drawer-content',
//   template: '<ng-content></ng-content>',
//   host: {
//     'class': 'mat-drawer-content',
//     '[style.margin-left.px]': '_container._contentMargins.left',
//     '[style.margin-right.px]': '_container._contentMargins.right',
//   },
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   encapsulation: ViewEncapsulation.None,
// })
// export class MatDrawerContent extends CdkScrollable implements AfterContentInit {
//   constructor(
//     private _changeDetectorRef: ChangeDetectorRef,
//     // @Inject(forwardRef(() => MatDrawerContainer)) public _container: MatDrawerContainer,
//     elementRef: ElementRef<HTMLElement>,
//     scrollDispatcher: ScrollDispatcher,
//     ngZone: NgZone,
//   ) {
//     super(elementRef, scrollDispatcher, ngZone);
//   }

//   ngAfterContentInit() {
//     this._container._contentMarginChanges.subscribe(() => {
//       this._changeDetectorRef.markForCheck();
//     });
//   }
// }