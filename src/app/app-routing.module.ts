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
  {
    path: 'groups',
    data: { breadcrumb: 'Group' },
    children: [
      {
        path: 'grpBox',
        loadChildren: () =>
          import('./module/grp-box/grp-box.module').then((m) => m.GrpBoxModule),
      },
    ],
  },
  {
    path: 'uploader',
    data: { breadcrumb: 'FileUpload' },
    children: [
      {
        path: 'fileUpload',
        loadChildren: () =>
          import('./module/file-upload/file-upload.module').then(
            (m) => m.FileUploadModule
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
