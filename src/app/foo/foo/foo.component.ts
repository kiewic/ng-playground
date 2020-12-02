import { Component, OnInit } from '@angular/core';

import { RandomService } from '../random.service';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo value is {{randomValue}}!
    </p>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit {
  readonly randomValue: number;

  constructor(random: RandomService) {
    this.randomValue = random.getRandomValue();
  }

  ngOnInit(): void {
  }

}
