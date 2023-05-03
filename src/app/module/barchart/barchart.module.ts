import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarchartRoutingModule } from './barchart-routing.module';
import { BarchartComponent } from './barchart.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';

@NgModule({
  declarations: [
    BarchartComponent
  ],
  imports: [
    CommonModule,
    BarchartRoutingModule,
    RouterModule,
    AppCommonModule
  ]
})
export class BarchartModule { }
