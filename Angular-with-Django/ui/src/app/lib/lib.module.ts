import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupHostComponent } from './components/popup-host/popup-host.component';
import { PopupRectDirective } from './directives/popup-rect.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

import { PopupService } from './services/popup.service';
import { AnimateDialogComponent } from './components/animate-dialog/animate-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupHostComponent,
    PopupRectDirective,
    LifeCycleDirective,
    ModalDialogComponent,
    AnimateDialogComponent
  ],
  exports: [
    PopupRectDirective,
    ModalDialogComponent,
    AnimateDialogComponent
  ],
  providers: [
    PopupService
  ]
})
export class LibModule { }
