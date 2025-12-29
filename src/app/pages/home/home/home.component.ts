import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@i18n/translate.service';
import { MasonryController } from '@lib/masonry';
import { IProject } from '@models/Project';
import { PageMetaService } from '@services/page-meta.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public readonly project$: Observable<IProject[]> = this.route.data.pipe(map((d) => d.projects));

  @ViewChild('container', { static: true })
  public elementsRoot: ElementRef<HTMLUListElement> | null = null;

  private masonry: MasonryController | undefined;

  constructor(private route: ActivatedRoute, private pageMetaService: PageMetaService) {}

  ngOnInit(): void {
    const title = `${TranslateService.localize('menu.portfolio')} | ${TranslateService.localize(
      'menu.first-name',
    )} ${TranslateService.localize('menu.last-name')}`;
    this.pageMetaService.setTitle(title);
    this.pageMetaService.setDescription('Ознакомьтесь со списком моих работ');
  }

  ngOnDestroy(): void {
    this.masonry?.destroy();
  }

  ngAfterViewInit(): void {
    const elementsRoot = this.elementsRoot?.nativeElement;

    if (elementsRoot == null) {
      return;
    }

    this.masonry = new MasonryController(elementsRoot);
  }
}
