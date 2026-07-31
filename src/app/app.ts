import { Component, signal } from '@angular/core';
import { GamePage } from "./pages/game-page/game-page";

@Component({
  selector: 'app-root',
  imports: [GamePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('snake-game');
}
