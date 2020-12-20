import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMoviesComponent } from './components/listar-movies/listar-movies.component';
import { CrearMoviesComponent } from './components/crear-movies/crear-movies.component';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';
import { LayoutAnalisisComponent } from './components/layout-analisis/layout-analisis.component';
import { PeliculasPopularesComponent } from './components/analisis/peliculas-populares/peliculas-populares.component';
import { SeriesPopularesComponent } from './components/analisis/series-populares/series-populares.component';
import { PeorContenidoComponent } from './components/analisis/peor-contenido/peor-contenido.component';
import { SubscripcionesComponent } from './components/analisis/subscripciones/subscripciones.component';
import { GananciasComponent } from './components/analisis/ganancias/ganancias.component';
const routes: Routes = [
  {
      path: '',
      component: ListarMoviesComponent,
  },
  {
    path: 'create',
    component: CrearMoviesComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'analisis',
    component: LayoutAnalisisComponent,
    children: [
      {
        path: '',
        component: PeliculasPopularesComponent,
      },
      {
        path: 'series',
        component: SeriesPopularesComponent,
      },
      {
        path: 'gastos',
        component: PeorContenidoComponent,
      },
      {
        path: 'subscripciones',
        component: SubscripcionesComponent,
      },
      {
        path: 'ganancias',
        component: GananciasComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
