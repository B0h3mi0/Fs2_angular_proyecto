import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})

/**
 * @description componente que nos permitira visualizar los producto que se encuentran almacenado en el local storage.
 *
 * @param descripcion Descripcion del producto
 * @param name Nombre del producto
 * @param precio valor del producto
 */
export class Productos {

}
