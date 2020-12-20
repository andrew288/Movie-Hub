import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarMoviesComponent } from './components/listar-movies/listar-movies.component';
import { CrearMoviesComponent } from './components/crear-movies/crear-movies.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';
import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Load Maps
import * as Maps from 'fusioncharts/fusioncharts.maps';
// Load WorldMap definition
import * as World from 'fusioncharts/maps/fusioncharts.world';
// grafico bala
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
//graficos
import { LayoutAnalisisComponent } from './components/layout-analisis/layout-analisis.component';
import { PeliculasPopularesComponent } from './components/analisis/peliculas-populares/peliculas-populares.component';
import { SeriesPopularesComponent } from './components/analisis/series-populares/series-populares.component';
import { PeorContenidoComponent } from './components/analisis/peor-contenido/peor-contenido.component';
import { SubscripcionesComponent } from './components/analisis/subscripciones/subscripciones.component';
import { GananciasComponent } from './components/analisis/ganancias/ganancias.component';
import { GraficoBalaComponent } from './components/analisis/grafico-bala/grafico-bala.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts,Maps, World, Widgets, FusionTheme);
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    ListarMoviesComponent,
    CrearMoviesComponent,
    MenuComponent,
    DetailComponent,
    UpdateComponent,
    LayoutAnalisisComponent,
    PeliculasPopularesComponent,
    SeriesPopularesComponent,
    PeorContenidoComponent,
    SubscripcionesComponent,
    GananciasComponent,
    GraficoBalaComponent,
    EliminarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FusionChartsModule,
    TranslateModule,
  ]
})
export class AdminModule { }
