import { RouterModule, Routes } from '@angular/router';
import { Laboratorios } from './pages/home/laboratorios/laboratorios';
import { Perfil } from './pages/home/perfil/perfil';
import { NgModule } from '@angular/core';
import { Carrito } from './pages/home/carrito/carrito';
import { Registro } from './pages/registro/registro';
import { RecuperaPass } from './pages/recupera-pass/recupera-pass';
import { Main } from './pages/main/main';
import { Home } from './pages/home/home';
import { LoginForm } from './pages/login-form/login-form';

export const routes: Routes = [
    { path: '', component: LoginForm },
    { path: 'main', component: Main },
    { 
        path: 'home', 
        component: Home,
        children:[
            { path: '', redirectTo: 'Laboratorios', pathMatch: 'full' },
            { path: 'productos', component: Laboratorios },
            { path: 'carrito', component: Carrito  },
            { path: 'perfil', component: Perfil }
        ] 
    },
    { path: 'registro', component: Registro },
    { path: 'recupera-pass', component: RecuperaPass },
    { path: '**', redirectTo: '' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
