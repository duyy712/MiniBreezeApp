import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BreezeBridgeAngularModule } from 'breeze-bridge-angular';
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { MovieComponent } from './data/movie.component';
import { MovieDetailComponent } from './data/movie-detail.component';
import { CreateMovieComponent } from './data/create-movie.component';
import { TableComponent } from './table/table.component';
import { TableDetailComponent } from './table/table-detail.component';



import { MovieService } from './data/movie.service';
import { TableService } from './table/table.service';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    TableComponent,
    TableDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    ReactiveFormsModule,
    BreezeBridgeAngularModule
  ],
  providers: [MovieService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
