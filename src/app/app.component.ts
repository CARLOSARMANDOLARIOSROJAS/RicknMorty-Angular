import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersComponent } from './components/characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, CharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ricknmorty-angular';
}
