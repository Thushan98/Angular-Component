import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WrapperComponent } from 'src/app/common-components/wrapper/wrapper.component';
import { OutletLeftDirective } from 'src/app/common-components/wrapper/outlet-left.directive';
import { OutletRightDirective } from 'src/app/common-components/wrapper/outlet-right.directive';
import { TypeComponent } from './type/type.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
    TypeComponent,
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
    TypeComponent,
    BreadcrumbsComponent,
  ],
})
export class AppCommonModule {}
