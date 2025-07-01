import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recupera-pass',
  imports: [RouterLink],
  templateUrl: './recupera-pass.html',
  styleUrl: './recupera-pass.scss'
})

/**
 * @description En este componente de RecuperarContraseña, se implementara enviar correo electronico para recupérar la contraseña una vez se comience a trabajar con el backend
 *
 * @param email este parametro se utilizara para recuperar contraseña
 * @returns `true` si el usuario inisio sesion con éxito, `false` si las credeciales no coinciden.
 */
export class RecuperaPass {

}
