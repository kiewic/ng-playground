import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooComponent // this has to be declared or imported
  ]
})
export class FooModule { }
