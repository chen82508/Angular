import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SideNavComponent } from './side-nav/side-nav.component';
import { BranchComponent } from './branch/branch.component';

const routes: Routes = [
  { path: 'branch', component: BranchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
