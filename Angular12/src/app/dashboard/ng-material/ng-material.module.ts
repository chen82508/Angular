import { NgModule } from '@angular/core';

// Import NG Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class NgMaterialModule { }
