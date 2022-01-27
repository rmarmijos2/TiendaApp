import { FirestorageService } from './../../services/firestorage.service';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/componentes/models/models';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  
  viveres: Product[] = []

  productos: Product = {
    nombre: null,
    precio: null,
    stock: null,
    categoria: null,
    foto: null,
    id: this.firestore.getId(),
  }

  path = 'Productos'
  newImage = '';
  newFile = '';

  constructor(private firestore: FirestoreService,
              public interaction: InteractionService,
              public alertController: AlertController,
              public firestorageService: FirestorageService) { }

  ngOnInit() {
    this.getProductos();
  }

 async  guardarProduct(){
    this.interaction.presentLoading("Guardando...")
    const nombre = this.productos.nombre;
    const res = await this.firestorageService.uploadImage(this.newFile, this.path, nombre)
    this.productos.foto = res;

    this.firestore.createDoc(this.productos, this.path, this.productos.id).then( res=> {
      this.interaction.closeLoading();
      this.interaction.presentToast("Guardado Con Exito");
    }).catch(error =>{
      this.interaction.presentToast("No se pudo guardar");
    })
  }

  getProductos(){
    this.firestore.getCollection<Product>(this.path).subscribe( res => {
      this.viveres = res;      
    })
  }

  async deleteProduct(producto: Product){
    const alert = await this.alertController.create({
      cssClass: 'normal',
      header: 'ADVERTENCIA',
      message: 'Seguro desea <strong>eliminar</strong> este producto',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.firestore.deleteDoc(this.path, producto.id).then( res=> {
              this.interaction.presentToast("Eliminado Con Exito");
              this.alertController.dismiss();
            }).catch(error =>{
              this.interaction.presentToast("No se pudo eliminar");
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async imagenUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.productos.foto = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }       
  }
}


