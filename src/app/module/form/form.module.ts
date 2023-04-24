import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  exports: [],
})
export class FormModule {}
