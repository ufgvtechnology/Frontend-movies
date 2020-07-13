import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MomentModule} from 'angular2-moment';
import {AngularFileUploaderModule} from "angular-file-uploader";

//import { EsParPipe} from './pipes/espar.pipe';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { MovieNewComponent } from './components/movie-new/movie-new.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent,
    HomeComponent,
    ErrorComponent,
    CatalogoComponent,
    MoviesComponent,
    MovieComponent,
    SearchComponent,
    MovieNewComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
