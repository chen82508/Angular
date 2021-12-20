import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KclSidenav, KclSidenavContainer } from './sidenav';
import {
  KclSidenavLogo,
  KclSidenavExpandLogo,
  KclSidenavList,
  KclSidenavProfile
} from './sidenav-drawer';
import { NgMaterialModule } from '../../ng-material/ng-material.module';

@NgModule({
  declarations: [
    KclSidenav,
    KclSidenavContainer,
    KclSidenavLogo,
    KclSidenavExpandLogo,
    KclSidenavList,
    KclSidenavProfile
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgMaterialModule,
  ],
  exports: [
    KclSidenav,
    KclSidenavContainer,
    KclSidenavLogo,
    KclSidenavExpandLogo,
    KclSidenavList,
    KclSidenavProfile
  ],
})
export class SidenavModule { }