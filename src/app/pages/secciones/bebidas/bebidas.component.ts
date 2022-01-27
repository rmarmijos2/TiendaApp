import { CarritoService } from './../../../services/carrito.service';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss'],
})
export class BebidasComponent implements OnInit {


  public arrayBebidas: {nombre: string, precio: string, imagen: string}[];

  constructor(public popoverController: PopoverController,
              public carritoService: CarritoService) {

    this.arrayBebidas = [
      {
        "nombre": "Coca-Cola",
        "precio": "$ 0,35",
        "imagen": "../../assets/productos/coca.png"
      },
      {
        "nombre": "220V",
        "precio": "$ 1,00",
        "imagen": "../../assets/productos/220.png"
      },
      {
        "nombre": "Gatorade",
        "precio": "$ 1,00",
        "imagen": "../../assets/productos/gatorade.jpg"
      },
      {
        "nombre": "Agua",
        "precio": "$ 0,50",
        "imagen": "../../assets/productos/agua.png"
      }
    ]

  }

  ngOnInit() {}

  addCarrito() {
    this.carritoService.addProducto()
  }

}
