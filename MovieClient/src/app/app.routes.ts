import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './data/movie.component';
import { MovieDetailComponent } from './data/movie-detail.component';
import { CreateMovieComponent } from './data/create-movie.component';
import { DataModelComponent } from './data-model/data-model.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieComponent,
  },
  {
    path: 'movies/details/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movies/create',
    component: CreateMovieComponent
  },
  {
    path: 'data',
    component: DataModelComponent
  }

];

// - Updated Export
export const routing = RouterModule.forRoot(routes);
