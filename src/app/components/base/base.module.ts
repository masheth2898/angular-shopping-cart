import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/modules/shared.module";
import { TableComponent } from "./app-table/app-table.component";
import { BaseRoutingModule } from "./base.routing.module";
import { BaseComponent } from "./base/base.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

@NgModule({
  declarations: [BaseComponent,TableComponent,DynamicFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }