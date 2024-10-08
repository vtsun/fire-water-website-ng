import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { ResourcesComponent } from './resources/resources.component';
import { CareersComponent } from './careers/careers.component';
import { DataComponent } from './data/data.component';
import { ProjectComponent } from './project/project.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectParticipantsComponent } from './project-participants/project-participants.component';
import { ProjectUpdatesComponent } from './project-updates/project-updates.component';
import { ResourcesReferencesComponent } from './resources-references/resources-references.component';
import { ResourcesEventsComponent } from './resources-events/resources-events.component';
import { ResourcesPublicationsComponent } from './resources-publications/resources-publications.component';
import { ResourcesExternalLinksComponent } from './resources-external-links/resources-external-links.component';
import { ProductsModelsComponent } from './products-models/products-models.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { PartnerPageAComponent } from './partner-page-a/partner-page-a.component';
import { HomePageCardComponent } from './home-page-card/home-page-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { PartnerPageDbverComponent } from './partner-page-dbver/partner-page-dbver.component';
import { ProjectPartnersComponent } from './project-partners/project-partners.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


// GEE Implementation
import { SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';


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
    ResourcesEventsComponent,
    ResourcesPublicationsComponent,
    ResourcesExternalLinksComponent,
    ContactComponent,
    ProductsComponent,
    PartnerPageAComponent,
    HomePageCardComponent,
    ProfileCardComponent,
    PartnerPageComponent,
    PartnerPageDbverComponent,
    ProjectPartnersComponent,

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
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatMenuModule,

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,

    SocialLoginModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'data', component: DataComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'project-overview', component: ProjectOverviewComponent },
      { path: 'project-participants', component: ProjectParticipantsComponent },
      { path: 'project-updates', component: ProjectUpdatesComponent },
      { path: 'resources-references', component: ResourcesReferencesComponent },
      { path: 'resources-events', component: ResourcesEventsComponent },
      { path: 'resources-publications', component: ResourcesPublicationsComponent },
      { path: 'resources-external-links', component: ResourcesExternalLinksComponent },
      { path: 'products-models', component: ProductsModelsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'partner-page-a', component: PartnerPageAComponent},

      { path: 'project-partners', component: ProjectPartnersComponent},
      { path: 'partner-page-dbver', component: PartnerPageDbverComponent},
    ]),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [{
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('304740708708-0it65k0sqjton2jp4chuaekftbp5gudv.apps.googleusercontent.com')
        }]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
