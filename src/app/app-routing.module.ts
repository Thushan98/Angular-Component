import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forms',
    data: { breadcrumb: 'Forms' },
    children: [
      {
        path: 'single-form',
        loadChildren: () =>
          import('./module/form/form.module').then((m) => m.FormModule),
      },
      {
        path: 'formArray',
        loadChildren: () =>
          import('./module/form-array/form-array.module').then(
            (m) => m.FormArrayModule
          ),
      },
    ],
  },
  {
    path: 'types',
    data: { breadcrumb: 'Types' },
    children: [
      {
        path: 'type',
        loadChildren: () =>
          import('./module/types/types.module').then((m) => m.TypesModule),
      },
    ],
  },
  {
    path: 'tables',
    data: { breadcrumb: 'Tables' },
    children: [
      {
        path: 'mat-table',
        loadChildren: () =>
          import('./module/mat-table/mat-table.module').then(
            (m) => m.MatTableModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
