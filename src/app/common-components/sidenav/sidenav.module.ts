import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSSidenavComponent } from './sidenav.component';
import { A11yModule } from '@angular/cdk/a11y';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [DSSidenavComponent],
  imports: [
    CommonModule, A11yModule, RouterModule, MatIconModule, MatTooltipModule
  ],
  exports: [DSSidenavComponent]
})
export class SidenavModule { }
