import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../services/game';

@Component({
  selector: 'app-game-menu',
  imports: [],
  templateUrl: './game-menu.html',
  styleUrl: './game-menu.css',
})
export class GameMenuComponent {
  
  constructor(private gameService: Game){}

  @Input() highScore!: number;

  @Output() play = new EventEmitter<void>();
  @Output() instructions = new EventEmitter<void>();
  @Output() settings = new EventEmitter<void>();
}
