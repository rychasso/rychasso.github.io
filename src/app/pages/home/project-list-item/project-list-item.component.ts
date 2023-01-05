import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EProjectTag, getProjectFirstImage, getTagLocalizedTitle, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';

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

  getTagLocalization(tag: EProjectTag): string {
    return getTagLocalizedTitle(tag);
  }

  getCountMessage(): string {
    const count = this.project.figures.length;

    const rest = count % 10;

    switch (rest) {
      case 1:
        return TranslateService.localize('count-иллюстрация', {
          count: this.project.figures.length,
        });

      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        return TranslateService.localize('count-иллюстраций', {
          count: this.project.figures.length,
        });

      default:
        return TranslateService.localize('count-иллюстрации', {
          count: this.project.figures.length,
        });
    }
  }
}
