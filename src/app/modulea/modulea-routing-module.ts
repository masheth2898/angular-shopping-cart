import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './route-a/route-a.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routeA',
    pathMatch: 'full',
  },
  {
    path: 'routeA',
    component: RouteAComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleaRoutingModule {}
