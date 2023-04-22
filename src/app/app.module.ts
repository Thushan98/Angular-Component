import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { A11yModule } from '@angular/cdk/a11y';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './common-components/top-nav/top-nav.component';
import { DSSidenavComponent } from './common-components/sidenav/sidenav.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { OutletButtonDirective } from './common-components/wrapper/outlet-button.directive';
import { BreadcrumbsComponent } from './common-components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DSSidenavComponent,
    SidebarComponent,
    OutletButtonDirective,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    A11yModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BreadcrumbsComponent],
})
export class AppModule {}
