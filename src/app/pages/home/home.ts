import { Component } from '@angular/core';
import { Aside } from './aside/aside';
import { Productos } from './productos/productos';
import {  Router, RouterOutlet } from '@angular/router';
import { Carrito } from './carrito/carrito';
import { Perfil } from './perfil/perfil';

@Component({
  selector: 'app-home',
  imports: [Aside, Productos, Carrito, Perfil, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
