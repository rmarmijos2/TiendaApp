import { AddProductComponent } from './pages/add-product/add-product.component';
import { VerdurasComponent } from './pages/secciones/verduras/verduras.component';
import { SnaksComponent } from './pages/secciones/snaks/snaks.component';
import { LimpiezaComponent } from './pages/secciones/limpieza/limpieza.component';
import { BebidasComponent } from './pages/secciones/bebidas/bebidas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { environment } from './../environments/environment.prod';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './componentes/input/input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    PedidosComponent,
    CategoriasComponent,
    ProductosComponent,
    PerfilComponent,
    BebidasComponent,
    LimpiezaComponent,
    SnaksComponent,
    VerdurasComponent,
    AddProductComponent,
  ],

  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
