import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getProjectFirstImage, IProject } from '@models/Project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListItemComponent {
  @Input() project!: IProject;

  get posterUrl(): string | null {
    if (this.project.posterSrc) {
      return this.project.posterSrc;
    }

    return getProjectFirstImage(this.project) || null;
  }
}
