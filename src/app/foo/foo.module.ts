import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooComponent } from './foo/foo.component';
import { RandomServiceToken } from '../random-service-token';
import { RandomService } from './random.service';

@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: RandomServiceToken,
      useClass: RandomService,
    }
  ],
  exports: [
    FooComponent // this has to be declared or imported
  ]
})
export class FooModule { }
