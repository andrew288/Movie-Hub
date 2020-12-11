import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "Importantes gastos de la empresa",
    subcaption: "Año 2020",
    showpercentvalues: "1",
    defaultcenterlabel: "Gastos",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b>",
    centerlabel: "$value",
    theme: "fusion"
  },
  data: [
    {
      label: "Telecomunicaciones",
      value: "5000"
    },
    {
      label: "Coste de dominio",
      value: "5300"
    },
    {
      label: "Hosting web",
      value: "5500"
    },
    {
      label: "Publicidad y servicios",
      value: "18900"
    },
    {
      label: "Desarrolladores",
      value: "17904"
    }
  ]
};

@Component({
  selector: 'app-peor-contenido',
  templateUrl: './peor-contenido.component.html',
  styleUrls: ['./peor-contenido.component.css']
})
export class PeorContenidoComponent implements OnInit {

  width = 600;
  height = 450;
  type = "doughnut2d";
  dataFormat = "json";
  dataSource = data;
    
  ngOnInit(): void {
  }

}
