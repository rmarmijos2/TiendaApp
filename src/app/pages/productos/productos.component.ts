import { FirestoreService } from './../../services/firestore.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/componentes/models/models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  path = 'Productos'

  constructor(public popoverController: PopoverController,
              private firestore: FirestoreService,
              private router: Router) { }


  ngOnInit() {}

  irAddProducto() {
    this.router.navigate(['/add-product'])
  }
  

}
