import { Injectable, Service } from '@angular/core';
import { Position } from '../models/position/position-module';

@Injectable({
  providedIn: 'root',
})
export class Game {
  isGameOver = false;

  boardSize = 20;

  snake: Position[] = [];

  food!: Position;

  score = 0;

  direction = 'RIGHT';

  eatSound = new Audio('sound/eat.wav');

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
    let newFood: Position;

    do {
      newFood = {
        x: Math.floor(Math.random() * this.boardSize),
        y: Math.floor(Math.random() * this.boardSize),
      };
    } while (this.snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));

    this.food = newFood;
  }

  moveSnake() {
    if (this.isGameOver) {
      return;
    }

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
      this.isGameOver = true;
      return;
    }

    const isSnake = this.snake.some(
      (segment) => segment.x === newHead.x && segment.y === newHead.y,
    );

    if (isSnake) {
      this.isGameOver = true;
      return;
    }

    const isFood = newHead.x === this.food.x && newHead.y === this.food.y;

    if (isFood) {
      this.eatSound.currentTime = 0;
      this.eatSound.play();
      this.snake = [newHead, ...this.snake];
      this.score++;
      this.generateFood();
    } else {
      this.snake = [newHead, ...this.snake.slice(0, -1)];
    }
  }

  getNextPosition(direction: string): Position {
    const head = this.snake[0];

    let x = head.x;
    let y = head.y;

    if (direction === 'RIGHT') x++;
    if (direction === 'LEFT') x--;
    if (direction === 'UP') y--;
    if (direction === 'DOWN') y++;

    return { x, y };
  }

  changeDirection(direction: string) {
    if (direction === 'LEFT' && this.direction === 'RIGHT') return;
    if (direction === 'RIGHT' && this.direction === 'LEFT') return;
    if (direction === 'UP' && this.direction === 'DOWN') return;
    if (direction === 'DOWN' && this.direction === 'UP') return;

    const nextPosition = this.getNextPosition(direction);

    const isSnake = this.snake.some(
      (segment) => segment.x === nextPosition.x && segment.y === nextPosition.y,
    );

    if (isSnake) return;

    this.direction = direction;
  }

  restartGame() {
    this.score = 0;
    this.direction = 'RIGHT';
    this.isGameOver = false;
    this.inicializeGame();
  }
}
