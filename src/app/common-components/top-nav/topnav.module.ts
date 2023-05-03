import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { TopNavComponent } from './top-nav.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TopNavComponent],
  imports: [CommonModule, OverlayModule, MatButtonModule],
  exports: [TopNavComponent],
})
export class TopnavModule {}
