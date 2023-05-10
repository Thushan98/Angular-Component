import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdBannerRoutingModule } from './ad-banner-routing.module';
import { AdBannerComponent } from './ad-banner.component';
import { AppCommonModule } from 'src/app/common-components/app-common.module';

@NgModule({
  declarations: [
    AdBannerComponent
  ],
  imports: [
    CommonModule,
    AdBannerRoutingModule,
    RouterModule,
    AppCommonModule
  ]
})
export class AdBannerModule { }
