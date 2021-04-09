import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeProjectsResolver } from './home-projects.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      projects: HomeProjectsResolver,
    },
  },
];
