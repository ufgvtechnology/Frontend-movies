import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public movies: Movie[];
  constructor(
    private _movieService: MovieService
  ) {
    this.title = "Películas más taquilleras 2020"
  }

  ngOnInit(): void {
    //Comprobar peticiones Ajax
    this._movieService.getMovies(true).subscribe(
      response => {
        //console.log(response)
        if (response.movies) {
          this.movies = response.movies;
        } else {

        }
      },
      error => {
        console.log(error)
      }
    );

    //console.log(this._movieService.pruebas());
  }


}
