import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconModule } from '@modules/icon';
import { LayoutModule } from '@modules/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IconModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
