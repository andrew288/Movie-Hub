import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-populares',
  templateUrl: './series-populares.component.html',
  styleUrls: ['./series-populares.component.css']
})
export class SeriesPopularesComponent implements OnInit {
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
              "caption": "Series populares [2019-2020]",
              "subCaption": "Las series mas visitadas hasta el momento",
              "xAxisName": "Serie",
              "yAxisName": "Numero de visitas",
              "numberSuffix": "K",
              "theme": "fusion",
            },
            "data": [{
              "label": "La casa de papel",
              "value": "290"
            }, {
              "label": "Juego de tronos",
              "value": "260"
            }, {
              "label": "Elite",
              "value": "180"
            }, {
              "label": "Stranger Things",
              "value": "140"
            }, {
              "label": "The Walking Dead",
              "value": "115"
            }, {
              "label": "Unorthodox",
              "value": "100"
            }, {
              "label": "Westworld",
              "value": "30"
            }, {
              "label": "Chernobyl",
              "value": "30"
            }]
          };
    }
    
  ngOnInit(): void {
  }
}
