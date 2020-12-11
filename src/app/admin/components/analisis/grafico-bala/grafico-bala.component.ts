import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "Nivel de visitas",
    subcaption: "Series y peliculas",
    numbersuffix: "K",
    theme: "fusion",
    plottooltext:
      "El valor maximo es de $datavalue visitas"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#F2726F"
      },
      {
        minvalue: "50",
        maxvalue: "200",
        code: "#FFC533"
      },
      {
        minvalue: "200",
        maxvalue: "350",
        code: "#62B58F"
      }
    ]
  },
  value: "290",
  target: "150"
};

@Component({
  selector: 'app-grafico-bala',
  templateUrl: './grafico-bala.component.html',
  styleUrls: ['./grafico-bala.component.css']
})
export class GraficoBalaComponent implements OnInit {
  
  width = 600;
  height = 150;
  type = "hbullet";
  dataFormat = "json";
  dataSource = data;

  ngOnInit(): void {
  }

}
