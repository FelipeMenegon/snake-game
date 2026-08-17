import { Component } from '@angular/core';
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

  highScore = 0;

  startGame(): void {
    this.showMenu = false;

    // Aqui você inicia o jogo.
  }

  openInstructions(): void {
    // Abrir modal de instruções
  }

  openSettings(): void {
    // Abrir modal de configurações
  }
}
