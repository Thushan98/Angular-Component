import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinechartRoutingModule } from './linechart-routing.module';
import { LinechartComponent } from './linechart.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';

@NgModule({
  declarations: [
    LinechartComponent
  ],
  imports: [
    CommonModule,
    LinechartRoutingModule,
    AppCommonModule
  ]
})
export class LinechartModule { }
