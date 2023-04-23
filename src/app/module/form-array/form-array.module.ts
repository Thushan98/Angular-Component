import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { FormArrayComponent } from './form-array.component';
import { WrapperComponent } from 'src/app/common-components/wrapper/wrapper.component';
import { OutletLeftDirective } from 'src/app/common-components/wrapper/outlet-left.directive';
import { OutletRightDirective } from 'src/app/common-components/wrapper/outlet-right.directive';

@NgModule({
  declarations: [
    FormArrayComponent,
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [WrapperComponent, OutletLeftDirective, OutletRightDirective],
})
export class FormArrayModule {}
