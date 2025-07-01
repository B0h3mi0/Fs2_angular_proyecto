import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss'
})
/**
 * @description Perfil nos permitira editar los datos que el usuario tiene registrados
 *
 * @param email Correo electrónico del usuario.
 * @param name Nombre completo del usuario.
 * @param password Contraseña del usuario.
 * @param username Nombre de usuario único.
 * @param birthdate Fecha de nacimiento.
 * @param phone Número de teléfono.
 * @returns `true` si el usuario fue modificado con exito, `false` si ocurrio un error al setear los datos.
 */
export class Perfil {

}
