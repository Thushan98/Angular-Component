import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WrapperComponent } from 'src/app/common-components/wrapper/wrapper.component';
import { OutletLeftDirective } from 'src/app/common-components/wrapper/outlet-left.directive';
import { OutletRightDirective } from 'src/app/common-components/wrapper/outlet-right.directive';
import { OutletButtonDirective } from 'src/app/common-components/wrapper/outlet-button.directive';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
    OutletButtonDirective,
    BreadcrumbsComponent,
    TypeComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    WrapperComponent,
    OutletLeftDirective,
    OutletRightDirective,
    OutletButtonDirective,
    BreadcrumbsComponent,
    TypeComponent
  ],
})
export class AppCommonModule {}
