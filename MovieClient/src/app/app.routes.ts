import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './data/movie.component';
import { MovieDetailComponent } from './data/movie-detail.component';
import { CreateMovieComponent } from './data/create-movie.component';
import { TableComponent } from './table/table.component';
import { TableDetailComponent } from './table/table-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/data',
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
    component: TableComponent
  },
  {
    path: 'data/detail/:id',
    component: TableDetailComponent
  }

];

// - Updated Export
export const routing = RouterModule.forRoot(routes);
