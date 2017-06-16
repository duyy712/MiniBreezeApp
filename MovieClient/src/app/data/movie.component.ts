import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie';
import { FormsModule, FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './movie.service';



@Component({
    selector: 'app-my-movie',
    templateUrl: 'movie.component.html',
    styles: ['movie.component.css']
})

export class MovieComponent implements OnInit {
    // movie: Movie = {
    //     Name: 'Death Prophet',
    //     Genre: 'Intelligence',
    //     Review: 'Range'
    // };
   @Input()
    movies: Movie[];
    movie: Movie;

    public myForm: FormGroup;
    public submitted: boolean;



    constructor(private movieService: MovieService, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.getAll();
        // console.log(this.movies);
        this.myForm = this.formBuilder.group({
            name: ['', <any>Validators.required],
            genre: ['', <any>Validators.required],
            review: ['', <any>Validators.required]
        });
    }

    getAll(): void {
        this.movieService.getMovies().then(
            data => this.movies = data,
            error => alert(error)
        );
    }
    add() {
        console.log(this.myForm['name']);
        // this.movie.Name = this.formBuilder['name'];

        this.movieService.addMovie(this.movie).then(
            success => {
                alert('success');
                this.getAll();
            },
            error => alert(error)
        );
    }
}
