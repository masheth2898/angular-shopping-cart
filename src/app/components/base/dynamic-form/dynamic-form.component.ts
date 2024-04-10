import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldConfig } from '../../../shared/interfaces/form-field-config';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  @Input() fields: FormFieldConfig[] = [];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.createFormGroup();
  }

  createFormGroup() {
    const group: any = {};

    this.fields.forEach(field => {
      group[field.name] = ['', Validators.compose(field.validation || [])];
    });

    return this.formBuilder.group(group);
  }
}
