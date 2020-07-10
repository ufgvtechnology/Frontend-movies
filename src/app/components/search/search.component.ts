import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit {

  public movies: Movie[];
  public search: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var search = params['search'];
      this.search = search;
      this._movieService.search(search).subscribe(
        response => {
          if (response.movies) {
            this.movies = response.movies;
          } else {
            this.movies = [];
          }
        },
        error => {
          this.movies = [];

        }
      );

    });
  }

}
