import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  type: string;
  label: string;

  focused: boolean;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  credenciales = {
    correo: null,
    password: null
  }

  constructor(private auth: AuthService,
              private interaction: InteractionService,
              private router: Router) { }

  async login(){
    await this.interaction.presentLoading('Ingresando....')
    console.log("credenciales-->", this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch( error => {
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o Contraseña Incorrectas');
      
    });

    if(res){
      console.log('res--> ', res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con Exito');
      this.router.navigate(['/home'])
    }
  }

  ngOnInit() {}

  

}
