import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Forms' },
    children: [
      {
        path: 'single-form',
        loadChildren: () =>
          import('./module/form/form.module').then((m) => m.FormModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
