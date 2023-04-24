import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array.component';

const routes: Routes = [
  {
    path: '',
    component: FormArrayComponent,
    data: { breadcrumb: 'formArray' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormArrayRoutingModule {}
