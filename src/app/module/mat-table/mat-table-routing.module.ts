import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponent } from './mat-table.component';

const routes: Routes = [{ path: '', component: MatTableComponent, data: { breadcrumb: 'mat-table' }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTableRoutingModule { }
