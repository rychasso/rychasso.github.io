import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import {
  getProjectFirstImage,
  IProject,
  IProjectFigureSet,
  IProjectFigure,
  isFigure,
  isFigureSet,
} from '@models/Project';
import { PageMetaService } from '@services/page-meta.service';
import { TranslateService } from '@i18n/translate.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  standalone: false,
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  public readonly project$: Observable<IProject> = this.route.data.pipe(pluck('project'));

  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private pageMetaService: PageMetaService) {}

  ngOnInit(): void {
    this.subscription = this.project$.subscribe((project) => {
      const title = `${project.title} | ${TranslateService.localize(
        'menu.first-name',
      )} ${TranslateService.localize('menu.last-name')}`;

      this.pageMetaService.setTitle(title);

      const imageSrc = getProjectFirstImage(project);

      this.pageMetaService.setImage(imageSrc || '');
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  isFigure(figureOrSet: IProjectFigure | IProjectFigureSet): figureOrSet is IProjectFigure {
    return isFigure(figureOrSet);
  }

  isFigureSet(figureOrSet: IProjectFigure | IProjectFigureSet): figureOrSet is IProjectFigureSet {
    return isFigureSet(figureOrSet);
  }
}
