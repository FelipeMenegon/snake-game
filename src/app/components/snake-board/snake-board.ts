import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, HostListener } from '@angular/core';
import { Position } from '../../models/position/position-module';
import { Game } from '../../services/game';

@Component({
  selector: 'app-snake-board',
  imports: [CommonModule],
  templateUrl: './snake-board.html',
  styleUrl: './snake-board.css',
})
export class SnakeBoard {
  constructor(
    public game: Game,
    private cdr: ChangeDetectorRef,
  ) {
    setInterval(() => {
      this.game.moveSnake();
      this.cdr.detectChanges();
    }, 200);
  }

  cells = Array.from({ length: 400 }, (_, index) => {
    return {
      x: index % 20,
      y: Math.floor(index / 20),
    };
  });

  isSnake(cell: Position): boolean {
    return this.game.snake.some((segment) => segment.x === cell.x && segment.y === cell.y);
  }

  isEven(cell: Position): boolean {
    return (cell.x + cell.y) % 2 === 0;
  }

  isFood(cell: Position) {
    return this.game.food.x === cell.x && this.game.food.y === cell.y;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.game.changeDirection('UP');
    }

    if (event.key === 'ArrowDown') {
      this.game.changeDirection('DOWN');
    }

    if (event.key === 'ArrowLeft') {
      this.game.changeDirection('LEFT');
    }

    if (event.key === 'ArrowRight') {
      this.game.changeDirection('RIGHT');
    }
  }
}
