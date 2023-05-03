import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinechartComponent } from './linechart.component';

const routes: Routes = [
  {
    path: '',
    component: LinechartComponent,
    data: { breadcrumb: 'linechart' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinechartRoutingModule {}
