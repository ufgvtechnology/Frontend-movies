import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css'],
  providers: [MovieService]
})
export class MovieNewComponent implements OnInit {

  public movie: Movie;
  public status: string;
  public page_title: string;
  public is_edit: boolean;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "1",
    uploadAPI: {
      url: Global.url + 'upload-image'

    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Subir imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };


  constructor(
    private _movieService: MovieService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {
    this.movie = new Movie('', '', '', '', null, null);
    this.page_title = 'Registrar Película';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._movieService.create(this.movie).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.movie = response.movie;

          //Alert
          console.log(response);
          this._router.navigate(['/catalogo']);
        }
      },
      error => {
        console.log(error)
        this.status = 'error';
        //Alert

      }
    );
  }

  imageUpload(data){
    this.movie.image = data.body.image;
    console.log(this.movie.image)
  }
}
