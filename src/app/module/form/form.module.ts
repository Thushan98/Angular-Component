import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { WrapperComponent } from 'src/app/common-components/wrapper/wrapper.component';
import { OutletLeftDirective } from 'src/app/common-components/wrapper/outlet-left.directive';
import { OutletRightDirective } from 'src/app/common-components/wrapper/outlet-right.directive';

@NgModule({
  declarations: [
    FormComponent,
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [WrapperComponent, OutletLeftDirective, OutletRightDirective],
})
export class FormModule {}
