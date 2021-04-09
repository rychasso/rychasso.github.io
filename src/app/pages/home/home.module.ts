import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { HomeProjectsResolver } from './home-projects.resolver';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';

@NgModule({
  declarations: [HomeComponent, ProjectListItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [HomeProjectsResolver],
})
export class HomeModule {}
