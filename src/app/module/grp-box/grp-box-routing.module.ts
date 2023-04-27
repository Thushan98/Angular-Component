import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrpBoxComponent } from './grp-box.component';

const routes: Routes = [
  { path: '', component: GrpBoxComponent, data: { breadcrumb: 'groupBox' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrpBoxRoutingModule {}
