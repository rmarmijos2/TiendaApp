import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.scss'],
})
export class VerdurasComponent implements OnInit {

  arrayVerduras: {nombre: string, precio: string, imagen: string}[];

  constructor() {

    this.arrayVerduras = [
      {
        "nombre": "Papa",
        "precio": "$ 0,35/lb",
        "imagen": "../../assets/productos/papa.png"
      },
      {
        "nombre": "Zanahoria",
        "precio": "$ 0,25/lb",
        "imagen": "../../assets/productos/zanahoria.png"
      },
      {
        "nombre": "Cebolla",
        "precio": "$ 0,60/lb",
        "imagen": "../../assets/productos/cebolla.png"
      },
      {
        "nombre": "Tomate",
        "precio": "$ 0,50/lb",
        "imagen": "../../assets/productos/tomate.png"
      }
    ]

  }

  ngOnInit() {}

}
