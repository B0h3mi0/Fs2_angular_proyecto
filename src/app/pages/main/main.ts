import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})

/**
 * @description Main, Este componente es el principal donde se mostraran todas las paginas visibles al usuario que no esta logeado
 * @returns Router Outlet aqui se mostraran las paginas segun la navegacion y las rutas seleccionadas por el usuario.
 */
export class Main {

}
