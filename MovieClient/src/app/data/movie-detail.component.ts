import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: 'movie-detail.component.html',
    styles: ['movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
    movie: Movie;
    movieID: number;
    _sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }
    ngOnInit() {
        this._sub = this.route.params.subscribe(params => {
            this.movieID = params['id'];
            console.log(this.movieID);
            this.movieService.getMovieById(this.movieID).then(
                movie => this.movie = movie
            );
        });
    }

    save(id, movie) {
        this.movieService.saveMovie(id, movie)
        .then(success => {
            alert('success');
            this.router.navigate(['../../'], {relativeTo: this.route});
        })
        .catch(error => alert(error));
    }

    delete(id) {
        this.movieService.deleteMovie(id)
        .then(success => {
            alert('Delete successfully');
            this.router.navigate(['../../'], {relativeTo: this.route});
        })
        .catch(error => alert(error));
    }
}
