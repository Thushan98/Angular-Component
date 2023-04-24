import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { AppCommonModule } from './common-components/app-common.module';
import { SidenavModule } from './common-components/sidenav/sidenav.module';
import { TopnavModule } from './common-components/top-nav/topnav.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    SidenavModule,
    TopnavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
