import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleaRoutingModule } from './modulea-routing-module';
import { RouteAComponent } from './route-a/route-a.component';



@NgModule({
  declarations: [RouteAComponent],
  imports: [
    CommonModule,
    ModuleaRoutingModule
  ]
})
export class ModuleaModule { }
