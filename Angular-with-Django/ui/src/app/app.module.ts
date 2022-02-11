import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ApiSharedService } from './api-shared.service';
import { ShowBrhComponent } from './branch/show-brh/show-brh.component';
import { BranchComponent } from './branch/branch.component';
import { EditBrhComponent } from './branch/edit-brh/edit-brh.component';

import { LibModule } from './lib/lib.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ShowBrhComponent,
    BranchComponent,
    EditBrhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LibModule,
  ],
  providers: [ApiSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
