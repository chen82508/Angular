import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  KclSidenav,
  KclSidenavContent,
  KclSidenavContainer
} from './sidenav';
import {
  KclListItemDrawer,
  KclLogoDrawer,
  KclProfileDrawer,
} from './sidenav-drawer';
import { NgMaterialModule } from '../../ng-material/ng-material.module';

@NgModule({
  declarations: [
    KclListItemDrawer,
    KclLogoDrawer,
    KclProfileDrawer,
    KclSidenav,
    KclSidenavContent,
    KclSidenavContainer,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgMaterialModule
  ],
  exports: [
    KclListItemDrawer,
    KclLogoDrawer,
    KclProfileDrawer,
    KclSidenav,
    KclSidenavContent,
    KclSidenavContainer,
  ],
})
export class SidenavModule { }