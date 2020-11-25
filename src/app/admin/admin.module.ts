import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarMoviesComponent } from './components/listar-movies/listar-movies.component';
import { CrearMoviesComponent } from './components/crear-movies/crear-movies.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [
    ListarMoviesComponent,
    CrearMoviesComponent,
    MenuComponent,
    DetailComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
