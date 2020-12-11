import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-populares',
  templateUrl: './peliculas-populares.component.html',
  styleUrls: ['./peliculas-populares.component.css']
})
export class PeliculasPopularesComponent implements OnInit {

  dataSource: Object;
    chartConfig: Object;

    constructor() {
         this.chartConfig = {
            width: '700',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
        };

        this.dataSource = {
            "chart": {
              "caption": "Peliculas populares [2019-2020]",
              "subCaption": "Las peliculas mas visitadas hasta el momento",
              "xAxisName": "Peliculas",
              "yAxisName": "Numero de visitas",
              "numberSuffix": "K",
              "theme": "fusion",
            },
            "data": [{
              "label": "Hamilton",
              "value": "330"
            }, {
              "label": "Borat 2",
              "value": "265"
            }, {
              "label": "My spy",
              "value": "150"
            }, {
              "label": "Extraction",
              "value": "145"
            }, {
              "label": "Mulan",
              "value": "125"
            }, {
              "label": "Project Power",
              "value": "110"
            }, {
              "label": "Black is King",
              "value": "70"
            }, {
              "label": "Artemis Fowl",
              "value": "50"
            }]
          };
    }
    
  ngOnInit(): void {
  }
}

