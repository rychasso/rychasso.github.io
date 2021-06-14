import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { getProjectFirstImage, IProject, IProjectFigureSet, IProjectFigure, isFigure, isFigureSet } from '@models/Project';
import { PageMetaService } from '@services/page-meta.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  public readonly project$: Observable<IProject> = this.route.data.pipe(pluck('project'));

  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private pageMetaService: PageMetaService) {}

  ngOnInit(): void {
    this.subscription = this.project$.subscribe((project) => {
      this.pageMetaService.setTitle(`${project.title} | Алёна Рычагова`);

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
