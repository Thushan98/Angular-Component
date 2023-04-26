import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { WrapperComponent } from './wrapper/wrapper.component';
import { OutletButtonDirective } from './wrapper/outlet-button.directive';
import { OutletLeftDirective } from './wrapper/outlet-left.directive';
import { OutletRightDirective } from './wrapper/outlet-right.directive';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TypeComponent } from './type/type.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
    OutletButtonDirective,
    BreadcrumbsComponent,
    TypeComponent,
    CustomSelectComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
    OutletButtonDirective,
    BreadcrumbsComponent,
    TypeComponent,
    CustomSelectComponent,
    TableComponent,
  ],
})
export class AppCommonModule {}
