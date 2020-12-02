import { Component, Inject, OnInit } from '@angular/core';

import { RandomServiceToken, IRandomService } from '../../random-service-token';

@Component({
  selector: 'app-bar',
  template: `
    <p>
      bar is {{randomValue}}!
    </p>
  `,
  styles: [
  ]
})
export class BarComponent implements OnInit {
  readonly randomValue: number;

  constructor(@Inject(RandomServiceToken) random: IRandomService) {
    this.randomValue = random.getRandomValue();
  }

  ngOnInit(): void {
  }

}
