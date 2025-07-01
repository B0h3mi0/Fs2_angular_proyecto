import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Main } from "./pages/main/main";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AngularProyecto';

  isLoggedIn = false;

  toggleLogin(): void{
    this.isLoggedIn = !this.isLoggedIn;
  }
}
