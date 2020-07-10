import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  public movie: Movie;
  public url: string;

  constructor(
    public _movieService: MovieService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getMovie(id).subscribe(
        response => {
          if (response.movie) {
            this.movie = response.movie;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/home']);
        }
      );
    });
  }

}
