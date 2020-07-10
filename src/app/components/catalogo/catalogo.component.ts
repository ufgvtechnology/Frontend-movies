import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [MovieService]
})
export class CatalogoComponent implements OnInit {

  public parametro1: string;
  public parametro2: string;
  public movies: Movie[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService

  ) { }

  ngOnInit(): void {

    //Obtener parametros por URL
    /*this._route.params.subscribe((params: Params) => {
      //console.log(params);
      this.parametro1 = params.parametro1;
      this.parametro2 = params.parametro2;
    });
    */

    //Comprobar peticiones Ajax
    this._movieService.getMovies().subscribe(
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
