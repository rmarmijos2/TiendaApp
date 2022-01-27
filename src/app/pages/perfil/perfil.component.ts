import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/componentes/models/models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  uid: string = null;
  info: Users = null;

  constructor(private auth: AuthService,
              private firestore: FirestoreService) { }

  ngOnInit() {
    this.auth.stateUser().subscribe( res => {
      console.log('Estado-->', res);
      this.getUid();
    })
  }
  
  async getUid(){
    const uid = await this.auth.getUid();
    if (uid){
      this.uid = uid
      console.log('UID -->', this.uid);
      this.getInfoUser();
    } else {
      console.log('No exite UID');
    }
  }

  getInfoUser() {
    const path = 'Usuarios';
    const id = this.uid;
    this.firestore.getDoc<Users>(path, id).subscribe( res => {
      if (res){
        this.info = res;
      }
      console.log('Los Datos son ->', res);      
    })
  }

}
