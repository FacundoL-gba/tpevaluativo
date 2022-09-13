import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: 'navbar', component:NavbarComponent},
  {path: 'home', component:HomeComponent},
  {path: 'inicio', component:HomeComponent},
  {path: 'productos', component:ListaProductosComponent},
  {path: 'crear-producto', component:CrearProductoComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'iniciar-sesion', component:LoginComponent},
  {path: 'recuperar-password', component:RecuperarPasswordComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'verificar-corre', component:VerificarCorreoComponent},
  {path: 'spinner', component:SpinnerComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
