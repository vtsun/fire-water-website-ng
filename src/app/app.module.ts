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
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectParticipantsComponent } from './project-participants/project-participants.component';
import { ProjectUpdatesComponent } from './project-updates/project-updates.component';
import { ResourcesReferencesComponent } from './resources-references/resources-references.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StickyHeaderComponent,
    ResourcesComponent,
    CareersComponent,
    DataComponent,
    ProjectComponent,
    ProjectOverviewComponent,
    ProjectParticipantsComponent,
    ProjectUpdatesComponent,
    ResourcesReferencesComponent,
    FilterPipe,

  ],
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'data', component: DataComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'project-overview', component: ProjectOverviewComponent },
      { path: 'project-participants', component: ProjectParticipantsComponent },
      { path: 'project-updates', component: ProjectUpdatesComponent },
      { path: 'resources-references', component: ResourcesReferencesComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
