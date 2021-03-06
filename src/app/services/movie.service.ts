import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Global } from '../services/global';

@Injectable()

export class MovieService {
    public url: string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    pruebas() {
        return "soy el servicio de movies";
    }

    getMovies(last: any = null): Observable<any> {
        var movies = 'movies';
        if (last != null) {
            movies = 'movies/true';
        }
        //Petición AJAX
        return this._http.get(this.url + movies);
    }
    getMovie(movieid): Observable<any> {

        return this._http.get(this.url + 'movie/' + movieid);

    }

    search(searchString): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString);
    }

    create(movie): Observable<any> {

        let params = JSON.stringify(movie);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save', params, { headers: headers });


    }
    delete(id) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'movie/' + id, { headers: headers })
    }
}