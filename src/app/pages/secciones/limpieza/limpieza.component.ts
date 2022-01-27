import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.scss'],
})
export class LimpiezaComponent implements OnInit {

  arrayLimpieza: {nombre: string, precio: string, imagen: string}[];

  constructor() {

    this.arrayLimpieza = [
      {
        "nombre": "Axión",
        "precio": "$ 1,30",
        "imagen": "../../assets/productos/axion.png"
      },
      {
        "nombre": "Fabuloso",
        "precio": "$ 1,25",
        "imagen": "../../assets/productos/fabuloso.png"
      },
      {
        "nombre": "Deja Detergente",
        "precio": "$ 1,50",
        "imagen": "../../assets/productos/deja.png"
      }
    ]
  }

  ngOnInit() {}

}
