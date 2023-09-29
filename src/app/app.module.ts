import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { PageBannerComponent } from './page-banner/page-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StickyHeaderComponent,
    PageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
