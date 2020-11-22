import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarMoviesComponent } from './components/listar-movies/listar-movies.component';
import { CrearMoviesComponent } from './components/crear-movies/crear-movies.component';


@NgModule({
  declarations: [
    ListarMoviesComponent,
    CrearMoviesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
