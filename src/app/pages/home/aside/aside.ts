import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone:true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './aside.html',
  styleUrl: './aside.scss'
})

/**
 * @description Componente ASIDE este navbar lateral nos permitirra navegar entre las paginas disponibles en nuestra pagina web, siempre y cuando el usuario
 * se encuentre logueado. de lo contrario solo estara habilitado para ver las paginas disponibles desde el main app
 */
export class Aside {


}
