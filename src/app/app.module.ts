import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { ResourcesComponent } from './resources/resources.component';
import { CareersComponent } from './careers/careers.component';
import { DataComponent } from './data/data.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StickyHeaderComponent,
    ResourcesComponent,
    CareersComponent,
    DataComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'resources', component: ResourcesComponent},
      { path: 'careers', component: CareersComponent},
      { path: 'data', component: DataComponent},
      { path: 'project', component: ProjectComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
