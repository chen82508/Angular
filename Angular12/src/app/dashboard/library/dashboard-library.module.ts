import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { SidenavModule } from './sidenav/sidenav.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { KclSidenavTooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    KclSidenavTooltipDirective,
    TooltipComponent,
  ],
  imports: [
    OverlayModule
  ],
  exports: [
    KclSidenavTooltipDirective,
    SidenavModule,
    TooltipComponent,
  ],
})
export class DashboardLibraryModule { }