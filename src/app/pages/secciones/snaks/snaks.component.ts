
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snaks',
  templateUrl: './snaks.component.html',
  styleUrls: ['./snaks.component.scss'],
})
export class SnaksComponent implements OnInit {

  arraySnacks: {nombre: string, precio: string, imagen: string}[];

  constructor() {

    this.arraySnacks = [
      {
        "nombre": "Doritos",
        "precio": "$ 0,50",
        "imagen": "../../assets/productos/doritos.png"
      },
      {
        "nombre": "Ruffles",
        "precio": "$ 0,50",
        "imagen": "../../assets/productos/ruffles.png"
      },
      {
        "nombre": "Golpe Rachero",
        "precio": "$ 0,50",
        "imagen": "../../assets/productos/golpe.png"
      },
      {
        "nombre": "Platanito",
        "precio": "$ 0,50",
        "imagen": "../../assets/productos/platanito.png"
      },
      {
        "nombre": "Tortolines",
        "precio": "$ 0,50",
        "imagen": "../../assets/productos/tortolines.png"
      }
    ]
  }

  ngOnInit() {}

}
