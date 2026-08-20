import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../services/game';

@Component({
  selector: 'app-game-menu',
  imports: [],
  templateUrl: './game-menu.html',
  styleUrl: './game-menu.css',
})
export class GameMenuComponent {
  constructor(private gameService: Game) {
    this.highScore = this.gameService.highScore;;
    this.score = this.gameService.score;
  }
  score = 0;
  highScore = 0;
  soundplay = new Audio('sound/start.mp3');

  @Input() gameStarted!: boolean;

  @Output() play = new EventEmitter<void>();


  playSound() {
    this.soundplay.currentTime = 0.5;
    this.soundplay.play();
  }
}
