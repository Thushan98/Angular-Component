import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DSSidenavComponent } from './sidenav.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [DSSidenavComponent],
  imports: [
    CommonModule,
    A11yModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [DSSidenavComponent],
})
export class SidenavModule {}
