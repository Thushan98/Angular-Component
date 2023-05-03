import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableRoutingModule } from './mat-table-routing.module';
import { MatTableComponent } from './mat-table.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';

@NgModule({
  declarations: [MatTableComponent],
  imports: [CommonModule, MatTableRoutingModule, AppCommonModule],
})
export class MatTableModule {}
