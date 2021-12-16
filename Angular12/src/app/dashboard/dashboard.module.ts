import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';

import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    InfoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // NG Material Modules
    NgMaterialModule
  ]
})
export class DashboardModule { }
