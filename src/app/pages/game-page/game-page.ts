import { Component } from '@angular/core';
import { SnakeBoard } from "../../components/snake-board/snake-board";

@Component({
  selector: 'app-game-page',
  imports: [SnakeBoard],
  templateUrl: './game-page.html',
  styleUrl: './game-page.css',
})
export class GamePage {}
