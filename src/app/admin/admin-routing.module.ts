import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMoviesComponent } from './components/listar-movies/listar-movies.component';
import { CrearMoviesComponent } from './components/crear-movies/crear-movies.component';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';
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
