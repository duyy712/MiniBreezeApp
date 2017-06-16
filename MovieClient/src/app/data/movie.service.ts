import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/observable';
import { Movie } from './movie';



@Injectable()

export class MovieService {
    urlApi = 'http://localhost:61371/api/movies';

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) { }

    getMovies(): Promise<any> {
        return this.http.get(this.urlApi)
            .toPromise()
            .then(res => res.json())
            .catch(error => Promise.reject(error));
    }

    addMovie(movie: Movie): Promise<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({Headers: headers});
        const body = JSON.stringify(movie);
        return this.http.post(this.urlApi, body, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(error => Promise.reject(error));
    }

    getMovieById(id: number): Promise<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.urlApi + '/' + id, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(error => Promise.reject(error));
    }
    saveMovie(id: number, movie: Movie): Promise<any> {
        const body = JSON.stringify(movie);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.urlApi + '/' + id, body, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(error => Promise.reject(error));
    }
    deleteMovie(id: number): Promise<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete(this.urlApi + '/' + id, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(error => Promise.reject(error));
    }
}
