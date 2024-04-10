import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModulebRoutingModule } from './moduleb-routing-module';
import { RouteBComponent } from './route-b/route-b.component';



@NgModule({
  declarations: [RouteBComponent],
  imports: [
    CommonModule,
    ModulebRoutingModule
  ]
})
export class ModulebModule { }
