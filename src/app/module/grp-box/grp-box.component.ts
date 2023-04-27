import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-grp-box',
  templateUrl: './grp-box.component.html',
  styleUrls: ['./grp-box.component.scss']
})
export class GrpBoxComponent {
  constructor(private readonly formBuilder: FormBuilder){}
  leftBox= 'Group 01';
  rightBox= 'Group 02';

  formDetail = this.formBuilder.group({
    name: '',
    email: ['', Validators.email],
  });
}
