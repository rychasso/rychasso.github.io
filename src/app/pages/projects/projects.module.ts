import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './projects.routes';
import { ProjectResolver } from './project.resolver';

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ProjectResolver],
})
export class ProjectsModule {}
