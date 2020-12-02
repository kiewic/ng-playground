import { Component, Inject, OnInit } from '@angular/core';

import { RandomServiceToken, IRandomService } from '../../random-service-token';

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

  constructor(@Inject(RandomServiceToken) random: IRandomService) {
    this.randomValue = random.getRandomValue();
  }

  ngOnInit(): void {
  }

}
