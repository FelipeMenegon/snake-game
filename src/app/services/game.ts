import { Injectable, Service } from '@angular/core';
import { Position } from '../models/position/position-module';

@Injectable({
  providedIn: 'root',
})
export class Game {
  boardSize = 20;

  snake: Position[] = [];

  food!: Position;

  score = 0;

  direction = 'RIGHT';

  constructor() {
    this.inicializeGame();
  }

  inicializeGame() {
    this.snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    this.generateFood();
  }

  generateFood() {
    this.food = {
      x: 5,
      y: 5,
    };
  }

  moveSnake() {
    const head = this.snake[0];

    let newX = head.x;
    let newY = head.y;

    if (this.direction === 'RIGHT') {
      newX++;
    }

    if (this.direction === 'LEFT') {
      newX--;
    }

    if (this.direction === 'UP') {
      newY--;
    }

    if (this.direction === 'DOWN') {
      newY++;
    }

    const newHead = {
      x: newX,
      y: newY,
    };

    if (
      newHead.x >= this.boardSize ||
      newHead.y >= this.boardSize ||
      newHead.x < 0 ||
      newHead.y < 0
    ) {
      console.log('Game Over');
      return;
    }

    this.snake = [newHead, ...this.snake.slice(0, -1)];
  }

  changeDirection(direction: string) {
    if (direction === 'LEFT' && this.direction === 'RIGHT') return;
    if (direction === 'RIGHT' && this.direction === 'LEFT') return;
    if (direction === 'UP' && this.direction === 'DOWN') return;
    if (direction === 'DOWN' && this.direction === 'UP') return;

    this.direction = direction;
  }
}
