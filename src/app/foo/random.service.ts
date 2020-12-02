import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private readonly randomValue: number;

  constructor() {
    this.randomValue = this.getRandomInt(1, 999);
  }

  getRandomValue(): number {
    return this.randomValue;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
