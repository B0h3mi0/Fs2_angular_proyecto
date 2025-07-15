import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../../models/producto.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ CommonModule],
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
export class Productos implements OnInit{

  producto: Producto[] = [];

  constructor( private http: HttpClient ) {}

  ngOnInit(): void{
    this.http.get<Producto[]>('https://b0h3mi0.github.io/Json_pruebas_fs2/productos.json').subscribe(data =>{
      this.producto = data;
    });
  }

}
