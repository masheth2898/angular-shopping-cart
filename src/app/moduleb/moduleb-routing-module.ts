import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteBComponent } from './route-b/route-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routeB',
    pathMatch: 'full',
  },
  {
    path: 'routeB',
    component: RouteBComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulebRoutingModule {}
