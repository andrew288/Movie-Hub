import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { EliminarComponent } from '../eliminar/eliminar.component';
@Component({
  selector: 'app-listar-movies',
  templateUrl: './listar-movies.component.html',
  styleUrls: ['./listar-movies.component.css']
})
export class ListarMoviesComponent implements OnInit {

  constructor(public dialogo: MatDialog) { }
  mostrarDialogo(): void {
    this.dialogo
      .open(EliminarComponent, {
        data: `¿Estas seguro de eliminar La Casa de Papel?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("Se ha eliminado con exito");
        } 
      });
  }

  ngOnInit(): void {
  }

}
