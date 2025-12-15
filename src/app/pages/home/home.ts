import { Component } from '@angular/core';
import { Aside } from './aside/aside';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Aside, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
