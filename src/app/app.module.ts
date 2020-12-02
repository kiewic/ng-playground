import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/foo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BarModule,
    BrowserModule,
    FooModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
