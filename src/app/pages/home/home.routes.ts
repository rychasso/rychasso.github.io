import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeIllustrationsResolver} from './home-illustrations.resolver';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
  resolve: {
    illustrations: HomeIllustrationsResolver
  }
}];
