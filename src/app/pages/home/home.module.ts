import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './home.routes';
import {HomeIllustrationsResolver} from './home-illustrations.resolver';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    HomeIllustrationsResolver
  ]
})
export class HomeModule { }
