import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Option } from 'src/app/common-components/custom-select/Option';
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
  items: Option[] = [
    {
      id: 1,
      name: "abc"
    },
    {
      id: 2,
      name: "abcd"
    },
    {
      id: 3,
      name: "abcefg"
    },
    {
      id: 4,
      name: "abchilk"
    },
    {
      id: 5,
      name: "abcefg"
    },
    {
      id: 6,
      name: "abchilk"
    }
  ]

  typeDetail = this.formBuilder.group({
    country: '',
  });

  customTypeDetail = this.formBuilder.group({
    school: ''
  });

  resetForm() {
    this.typeDetail.reset();
  }

  saveDetails() {
    console.log(this.typeDetail.value);
    this.resetForm();
  }
  onOptionSelected(option1: any){
    console.log(option1)
  }
}
