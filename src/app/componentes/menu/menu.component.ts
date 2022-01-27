import { FirestoreService } from './../../services/firestore.service';
import { InteractionService } from './../../services/interaction.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Users } from '../models/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  login: boolean = false;
  rol: 'Visitante' | 'Admin' = null;

  constructor(private router: Router,
    private popover: PopoverController,
    private auth: AuthService,
    private interaction: InteractionService,
    private route: Router,
    private firestore: FirestoreService) {

      this.auth.stateUser().subscribe( res => {
        if (res){
          this.login = true;
          this.getProductos(res.uid)
        } else {  
          this.login = false;       
        }
      })
    }

  ngOnInit(){ }

  irCategorias(){
    this.router.navigate(['/categorias'])
    this.popover.dismiss();
  }

  irPedidos(){
    this.router.navigate(['/pedidos'])
    this.popover.dismiss();
  }

  irProductos(){
    this.router.navigate(['/productos'])
    this.popover.dismiss();
  }

  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesión Finalizada')
    this.router.navigate(['/login'])
    this.popover.dismiss()
  }

  getProductos(uid: string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<Users>(path, id).subscribe(res => {
      if (res) {
      this.rol = res.perfil
      }   
    })
  }
}