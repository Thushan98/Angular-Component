import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private readonly formBuilder: FormBuilder) {}


  formDetail = this.formBuilder.group({
    name: '',
    email: ['', Validators.email],
  });

  formAddress = this.formBuilder.group({
    line1: '',
    line2: '',
    region: '',
    country: '',
  });

  resetForm() {
    this.formDetail.reset();
    this.formAddress.reset();
  }

  saveDetails() {
    console.log(this.formDetail.value);
    this.resetForm();
  }
}
