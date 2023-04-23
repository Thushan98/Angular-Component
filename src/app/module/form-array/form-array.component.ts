import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormArrayComponent implements OnInit {
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addAnother();
  }

  addressDetailForm = this.formBuilder.group({
    addressDetailArray: this.formBuilder.array([]),
  });

  get addressDetailArrayData(): FormArray {
    return this.addressDetailForm.controls['addressDetailArray'] as FormArray;
  }

  addAnother(): void {
    const details = this.formBuilder.group({
      line1: '',
      line2: '',
      city: '',
      region: '',
      postalCode: '',
      country: '',
    });
    this.addressDetailArrayData.push(details);
  }

  remove(detailIndex: number) {
    this.addressDetailArrayData.removeAt(detailIndex);
  }

  resetForm() {
    this.addressDetailForm.reset();
  }

  saveDetails() {
    console.log(this.addressDetailForm.value.addressDetailArray);
    this.resetForm();
  }
}
