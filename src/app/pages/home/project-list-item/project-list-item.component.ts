import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProject } from '@models/Project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListItemComponent {
  @Input() project!: IProject;

  constructor() {}

  get posterUrl(): string | null {
    return this.project.posterSrc || this.project.figures[0]?.src || null;
  }
}
