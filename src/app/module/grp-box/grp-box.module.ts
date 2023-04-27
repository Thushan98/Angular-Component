import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GrpBoxRoutingModule } from './grp-box-routing.module';
import { GrpBoxComponent } from './grp-box.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';


@NgModule({
  declarations: [
    GrpBoxComponent
  ],
  imports: [
    CommonModule,
    GrpBoxRoutingModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class GrpBoxModule { }
