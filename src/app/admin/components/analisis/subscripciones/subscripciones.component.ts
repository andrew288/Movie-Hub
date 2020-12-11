import { Component, OnInit } from '@angular/core';
const dataset = [{
  "id": "NA",
  "value": "25",
  "showLabel": "1"
  }, {
  "id": "SA",
  "value": "15",
  "showLabel": "1"
  }, {
  "id": "AS",
  "value": "22",
  "showLabel": "1"
  }, {
  "id": "EU",
  "value": "30",
  "showLabel": "1"
  }, {
  "id": "AF",
  "value": "5",
  "showLabel": "1"
  }, {
  "id": "AU",
  "value": "3",
  "showLabel": "1"
  }];
  
  const colorrange = {
  "minvalue": "0",
  "code": "#FFE0B2",
  "gradient": "1",
  "color":
  [{
  "minvalue": "5",
  "maxvalue": "15",
  "color": "#FFD74D"
  }, {
  "minvalue": "15",
  "maxvalue": "25",
  "color": "#FB8C00"
  }, {
  "minvalue": "25",
  "maxvalue": "35",
  "color": "#E65100"
  }]
};
@Component({
  selector: 'app-subscripciones',
  templateUrl: './subscripciones.component.html',
  styleUrls: ['./subscripciones.component.css']
})
export class SubscripcionesComponent implements OnInit {
  dataSource: Object;
  
    constructor() {
      this.dataSource = {
        "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
        
      };
    }
    
  ngOnInit(): void {
  }
}
