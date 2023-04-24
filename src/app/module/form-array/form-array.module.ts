import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { FormArrayComponent } from './form-array.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';

@NgModule({
  declarations: [
    FormArrayComponent,
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule,
    MatButtonModule,
    AppCommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class FormArrayModule {}
