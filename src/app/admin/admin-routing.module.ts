import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMoviesComponent } from './components/listar-movies/listar-movies.component';

const routes: Routes = [
  {
      path: '',
      component: ListarMoviesComponent,
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
