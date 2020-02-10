import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatGridListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { PublicationsComponent } from './publications/publications.component';

import { ProfileService } from '../shared/profile/profile.service';
import { PublicationService } from '../shared/publication/publication.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [
    ProfileService,
    PublicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
