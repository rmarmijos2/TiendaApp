import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/componentes/models/models';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {

  datos: Users = {
    nombre: null,
    apellido: null,
    genero: null,
    email: null,
    numero: null,
    password: null,
    uid: null,
    perfil: 'Visitante'
  }

  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private interaction: InteractionService,
              private router: Router) { }

  ngOnInit() {}

  async registrar(){
    this.interaction.presentLoading('Registrando...')
    console.log('datos-->', this.datos);
    const res = await this.auth.registrarUser(this.datos).catch(error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error')
      console.log('Error');      
    })
    if (res){
      console.log('Exito al crear el Usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null;
      await this.firestore.createDoc(this.datos, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado con Exito');
      this.router.navigate(['/home'])
    }
  }

}


