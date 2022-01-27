import { Router } from '@angular/router';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'src/app/componentes/menu/menu.component';
import { Users } from 'src/app/componentes/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  login: boolean = false;
  rol: 'Visitante' | 'Admin' = null;

  info: Users = null;

  constructor(public popoverController: PopoverController,
              private auth: AuthService,
              private firestore: FirestoreService,
              private router: Router) {

    this.auth.stateUser().subscribe( res => {
      if (res){
        console.log('Logeado');
        this.login = true;
        this.getPerfil(res.uid)
      } else {
        console.log('NO Logeado');   
        this.login = false;       
      }
    })
  }

  ngOnInit() {}

  async  openMenu(ev: any){
    const menu = await this.popoverController.create({
      component: MenuComponent,
      translucent: true,
      event: ev
    });
    await menu.present();

    const { role } = await menu.onDidDismiss();
  }

  getPerfil(uid: string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<Users>(path, id).subscribe(res => {
      console.log('Datos-->', res);
      if (res) {
      this.rol = res.perfil
      this.info = res
      }   
    })
  }

  irBebidas(){
    this.router.navigate(['/bebidas'])
  }
  irSnaks(){
    this.router.navigate(['/snaks'])
  }
  irVerduras(){
    this.router.navigate(['/verduras'])
  }
  irLimpieza(){
    this.router.navigate(['/limpieza'])
  }
}