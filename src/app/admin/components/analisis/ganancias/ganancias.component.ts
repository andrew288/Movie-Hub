import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "Economía de la empresa en los ultimo 23 años",
    subcaption: "(Ingresos y gastos)",
    showvalues: "0",
    numvisibleplot: "12",
    plottooltext:
      "<b>$dataValue</b>",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        {
          label: "2020"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Ingresos",
      data: [
        {
          value: "15622"
        },
        {
          value: "15612"
        },
        {
          value: "15820"
        },
        {
          value: "16723"
        },
        {
          value: "16415"
        },
        {
          value: "16555"
        },
        {
          value: "18803"
        },
        {
          value: "25950"
        },
        {
          value: "27396"
        },
        {
          value: "22435"
        },
        {
          value: "27888"
        },
        {
          value: "30243"
        },
        {
          value: "40619"
        },
        {
          value: "50077"
        },
        {
          value: "45003"
        },
        {
          value: "55948"
        },
        {
          value: "62484"
        },
        {
          value: "61518"
        },
        {
          value: "55819"
        },
        {
          value: "57437"
        },
        {
          value: "59171"
        },
        {
          value: "70090"
        },
        {
          value: "78318"
        },
        {
          value: "85253"
        }
      ]
    },
    {
      seriesname: "Gastos",
      data: [
        {
          value: "13612"
        },
        {
          value: "9612"
        },
        {
          value: "10820"
        },
        {
          value: "22723"
        },
        {
          value: "21415"
        },
        {
          value: "22555"
        },
        {
          value: "15803"
        },
        {
          value: "21950"
        },
        {
          value: "34396"
        },
        {
          value: "11435"
        },
        {
          value: "7780"
        },
        {
          value: "21243"
        },
        {
          value: "21619"
        },
        {
          value: "18577"
        },
        {
          value: "11503"
        },
        {
          value: "11278"
        },
        {
          value: "20522"
        },
        {
          value: "21518"
        },
        {
          value: "21819"
        },
        {
          value: "11437"
        },
        {
          value: "11171"
        },
        {
          value: "22690"
        },
        {
          value: "8418"
        },
        {
          value: "39253"
        }
      ]
    }
  ],
};
@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css']
})
export class GananciasComponent implements OnInit {
  width = 600;
  height = 470;
  type = "scrollline2d";
  dataFormat = "json";
  dataSource = data;

    ngOnInit(): void {
    }

}
