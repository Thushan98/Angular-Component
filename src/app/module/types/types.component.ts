import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Type } from 'src/app/common-components/type/type';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TypesComponent implements OnInit {
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('types');
  }

  countryTypes: Type[] = [
    {
      id: 1,
      name: 'Sri Lanka',
    },
    {
      id: 2,
      name: 'USA',
    },
  ];

  typeDetail = this.formBuilder.group({
    country: '',
  });

  resetForm() {
    this.typeDetail.reset();
  }

  saveDetails() {
    console.log(this.typeDetail.value);
    this.resetForm();
  }
}
