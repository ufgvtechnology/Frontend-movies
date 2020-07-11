import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from "@angular/router";

//Importar componentes para páginas exclusivas
import { HomeComponent } from "./components/home/home.component";
import { CatalogoComponent} from "./components/catalogo/catalogo.component";
import {ErrorComponent} from "./components/error/error.component";
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import {MovieNewComponent} from './components/movie-new/movie-new.component';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path:'catalogo', component:CatalogoComponent},
    //{path:'catalogo/:parametro1/:parametro2', component:CatalogoComponent},
    {path:'catalogo/movie/:id', component:MovieComponent},
    {path:'buscar/:search', component:SearchComponent},
    {path:'catalogo/crear', component:MovieNewComponent},
    { path:'**',component:ErrorComponent}
];


//Exportar el módulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);

