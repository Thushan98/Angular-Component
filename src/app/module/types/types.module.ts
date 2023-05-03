import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TypesComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    AppCommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class TypesModule {}
