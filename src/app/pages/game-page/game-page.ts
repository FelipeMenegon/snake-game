import { Component, HostListener } from '@angular/core';
import { SnakeBoard } from '../../components/snake-board/snake-board';
import { GameMenuComponent } from '../../components/game-menu/game-menu';

@Component({
  selector: 'app-game-page',
  imports: [SnakeBoard, GameMenuComponent],
  templateUrl: './game-page.html',
  styleUrl: './game-page.css',
})
export class GamePage {
  showMenu = true;
  gameStarted = false;

  highScore = 0;

  startGame(): void {
    this.gameStarted = true;
    this.showMenu = false;
  }

  continueGame() {
    this.showMenu = false;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showMenu = true;
    }
  }
}
