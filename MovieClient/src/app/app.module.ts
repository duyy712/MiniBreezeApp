import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {BreezeBridgeAngularModule} from 'breeze-bridge-angular';
import {routing} from './app.routes';


import { AppComponent } from './app.component';
import { MovieComponent} from './data/movie.component';
import {MovieDetailComponent} from './data/movie-detail.component';
import {CreateMovieComponent} from './data/create-movie.component';
import {DataModelComponent} from './data-model/data-model.component';


import {MovieService} from './data/movie.service';
import {DataModelService} from './data-model/data-model.service';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    DataModelComponent

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
  providers: [MovieService, DataModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
