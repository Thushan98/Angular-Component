import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart.component';

const routes: Routes = [{ path: '', component: BarchartComponent, data: { breadcrumb: 'barchart' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarchartRoutingModule { }
