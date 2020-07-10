import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Global } from '../../services/global';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})
export class MoviesComponent implements OnInit {
  public url: string;

  @Input() movies: Movie[];

  constructor() {
    this.url = Global.url;
  }

  ngOnInit(): void {
    console.log(this.movies)
  }

}
