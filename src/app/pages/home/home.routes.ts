import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeProjectsResolver } from './home-projects.resolver';
import { HomeProjectsByTagResolver } from './home-projects-by-tag.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      projects: HomeProjectsResolver,
    },
  },
  {
    path: 'tags/:tag',
    component: HomeComponent,
    resolve: {
      projects: HomeProjectsByTagResolver,
    },
  },
];
