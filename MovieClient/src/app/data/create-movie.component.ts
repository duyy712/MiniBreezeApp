import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
    selector: 'app-create-movie',
    templateUrl: 'create-movie.component.html',
    providers: [Movie]
})
export class CreateMovieComponent implements OnInit {

    constructor(private movieService: MovieService, private router: Router, private movie: Movie) { }

    ngOnInit() {

    }

    add(movie) {
        this.movieService.addMovie(movie)
            .then(success => {
                alert('success');
                this.router.navigate(['../']);
            })
            .catch(error => alert(error));

    }
}
