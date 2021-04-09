import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectResolver } from './project.resolver';

export const routes: Routes = [
  {
    path: ':id',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver,
    },
  },
];
