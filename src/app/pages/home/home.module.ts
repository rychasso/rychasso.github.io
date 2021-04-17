import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { HomeProjectsResolver } from './home-projects.resolver';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { IconModule } from '@modules/icon';
import { HomeProjectsByTagResolver } from './home-projects-by-tag.resolver';

@NgModule({
  declarations: [HomeComponent, ProjectListItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IconModule],
  providers: [HomeProjectsResolver, HomeProjectsByTagResolver],
})
export class HomeModule {}
