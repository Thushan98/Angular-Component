import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit{
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  formDetail = this.formBuilder.group({
    name: '',
    email: ['', Validators.email]
  });

  formAddress = this.formBuilder.group({
    line1: '',
    line2: '',
    region: '',
    country: ''
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
