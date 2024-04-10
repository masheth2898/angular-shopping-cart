import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
    
  ],
  exports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class SharedModule {}
