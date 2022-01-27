import { AddProductComponent } from './pages/add-product/add-product.component';
import { LimpiezaComponent } from './pages/secciones/limpieza/limpieza.component';
import { VerdurasComponent } from './pages/secciones/verduras/verduras.component';
import { SnaksComponent } from './pages/secciones/snaks/snaks.component';
import { BebidasComponent } from './pages/secciones/bebidas/bebidas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'singup', component: SingupComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'bebidas', component: BebidasComponent},
  { path: 'snaks', component: SnaksComponent},
  { path: 'verduras', component: VerdurasComponent},
  { path: 'limpieza', component: LimpiezaComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
